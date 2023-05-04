# API
from fastapi import FastAPI
from typing import Union

import pandas as pd

import uvicorn

# machine learning
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC, LinearSVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import Perceptron
from sklearn.linear_model import SGDClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

def stampaPercentDF(df):
    for name, group in df:
    # La funzione value_counts() ritorna la percentuale di apparizione per ogni elemento univoco,
    # è come un groupby però ci aggiunge le percentuali (se aggiungo il parametro normalize) altrimenti ritornebbe solo il numero di volte in cui i valori appaiono
        group = round(group['Severity'].value_counts(normalize=True) * 100, 2)
        print(name)
        print(group)
        print('-'*10)

df_completo = pd.read_csv('CSVCompleto.csv')

df_completo = df_completo[~(pd.isna(df_completo.iloc[:,0]))]

df_completo = df_completo.drop(df_completo[df_completo['Type'] == 'Moving average'].index, axis=0)

df_completo = df_completo.drop(['Series_reference', 'Validation', 'Indicator', 'Type'], axis=1)

df_esempio = df_completo.groupby('Units')
df_esempio.all()

units_map = {
    'Injuries': 1,
    'Per 100,000 FTEs': 2,
    'Per 100,000 people': 3,
    'Per billion km': 4,
    'Per thousand registered vehicles': 5
}
df_completo['Units'] = df_completo['Units'].map(units_map)

pop_map = {
    'Maori': 1,
    'Whole pop': 2,
    'Children': 3
}
df_completo['Population'] = df_completo['Population'].map(pop_map)

cause_map = {
    'All': 1,
    'Assault': 2,
    'Drowing': 3,
    'Falls': 4,
    'Intentional self-harm': 5,
    'Motor vehicle traffic crashes': 6,
    'Work': 7,
    'Car occupant': 8,
    'Intentional': 9,
    'Pedestrian': 10
}
df_completo['Cause'] = df_completo['Cause'].map(cause_map)

age_map = {
    '0-14 years': 1,
    '0-74 years': 2,
    '75+ years': 3,
    'All ages':4
}
df_completo['Age'] = df_completo['Age'].map(age_map)

severity_map = {
    'Fatal': 1,
    'Serious non-fatal': 2,
    'Serious': 3
}
df_completo['Severity'] = df_completo['Severity'].map(severity_map)

# Arrondo i numeri a 2 cifre dopo la virgola, dato che nel CSV ne hanno molti di più.
df_completo['Lower_CI'] = round(df_completo['Lower_CI'], 2)
df_completo['Upper_CI'] = round(df_completo['Upper_CI'], 2)

# suddivide il dataframe in 70/30
df_test, df_train = train_test_split(df_completo, test_size=0.3, random_state=42)

# salva i dati in due file CSV distinti
df_train.to_csv('medical-test.csv', index=False)
df_test.to_csv('medical-train.csv', index=False)

Y_test = df_test["Severity"]
Y_train = df_train["Severity"]
X_train = df_train.drop("Severity", axis=1)
X_test  = df_test.drop("Severity", axis=1,errors='ignore').copy()

logreg = LogisticRegression()
logreg.fit(X_train, Y_train)
print(X_test)
acc_log = round(logreg.score(X_train, Y_train) * 100, 2)
print(acc_log)
acc_log = round(logreg.score(X_test, Y_test) * 100, 2)

# Random Forest

random_forest = RandomForestClassifier(n_estimators=100)
random_forest.fit(X_train, Y_train)
Y_pred = random_forest.predict(X_test)
random_forest.score(X_train, Y_train)
acc_random_forest = round(random_forest.score(X_train, Y_train) * 100, 2)

# Decision Tree

decision_tree = DecisionTreeClassifier()
decision_tree.fit(X_train, Y_train)
Y_pred = decision_tree.predict(X_test)
acc_decision_tree = round(decision_tree.score(X_train, Y_train) * 100, 2)

# KNN

knn = KNeighborsClassifier(n_neighbors = 3)
knn.fit(X_train, Y_train)
Y_pred = knn.predict(X_test)
acc_knn = round(knn.score(X_train, Y_train) * 100, 2)

# age :  "0-14" cause :  "all" data-value :  "" lower_CI :  "" period :  "" population :  "maori" units :  "100FTEs" upper_CI :  ""

# runnare così:
# uvicorn api:app --reload --host 0.0.0.0

app = FastAPI()

@app.get("/GetResponse")
async def read_root(age: str, cause: str, data_value: int, lower_CI: int, period: int, population: str, units: str, upper_CI: int): 
    df = {
        "Period": [period],
        "Data_value": [data_value],
        "Lower_CI": [lower_CI],
        "Upper_CI": [upper_CI],
        "Units": [units],
        "Cause": [cause],
        "Population": [population],
        "Age": [age]
    }
    df_domanda = pd.DataFrame(df)

    df_domanda['Age'] = df_domanda['Age'].map(age_map)
    df_domanda['Cause'] = df_domanda['Cause'].map(cause_map)
    df_domanda['Population'] = df_domanda['Population'].map(pop_map)
    df_domanda['Units'] = df_domanda['Units'].map(units_map)

    df_domanda['Lower_CI'] = round(df_domanda['Lower_CI'], 2)
    df_domanda['Upper_CI'] = round(df_domanda['Upper_CI'], 2)

    predd = knn.predict(df_domanda)

    print(df_domanda.head(5))

    df_domanda["Risposta"] = predd
    print(df_domanda.iloc[:, 8])
    risposta = next(iter(df_domanda.iloc[:, 8].values))

    if risposta == 1:
        risposta = "Fatal"
    elif risposta == 2:
        risposta = "Serious non-fatal"
    elif risposta == 3:
        risposta = "Serious"

    
    return{"prediction": str(risposta)}
