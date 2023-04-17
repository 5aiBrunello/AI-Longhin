import pandas as pd
from sklearn.linear_model import LogisticRegression
import seaborn as sns
import matplotlib.pyplot as plt

# ! Funzioni 

def stampaPercentDF(df):
    for name, group in df:
    # La funzione value_counts() ritorna la percentuale di apparizione per ogni elemento univoco,
    # è come un groupby però ci aggiunge le percentuali (se aggiungo il parametro normalize) altrimenti ritornebbe solo il numero di volte in cui i valori appaiono
        print(name)
        group = round(group['Severity'].value_counts(normalize=True) * 100, 2)
        print(group)
        print('-'*10)


# ! Data Analysis
    
df_train = pd.read_csv('medical-train.csv')
df_test = pd.read_csv('medical-test.csv')

# Elimino tutti i valori Nan dovuti dall'eliminazione dei dati
df_train = df_train[~(pd.isna(df_train.iloc[:,0]))]

# Elimino tutti i valori Nan
df_test = df_test[~(pd.isna(df_test.iloc[:,0]))]

df_train = df_train.drop(['Series_reference', 'Validation', 'Indicator', 'Data_value', 'Lower_CI', 'Upper_CI'], axis=1)

# * Per semplicità elimino dal dataframe le righe che hanno moving average come type dato che sono in un range di anni invece che uno solo
df_train = df_train.drop(df_train[df_train['Type'] == 'Moving average'].index, axis=0)

print(df_train.columns.values)


print('Units')
units_map = {
    'Injuries': 1,
    'Per 100,000 FTEs': 2,
    'Per 100,000 people': 3,
    'Per billion km': 4,
    'Per thousand registered vehicles': 5
}
df_train['Units'] = df_train['Units'].map(units_map)
df_units = df_train.groupby('Units')
stampaPercentDF(df_units)

# ! Abbiamo tirato via Indicator perchè le percentuali erano molto simili alla colonna Units e un analisi più approfondita ha rivelato che le stesse unità avevano per la maggior parte gli stessi indicatori
# print('Indicator')
# df_indicator = df_train.groupby('Indicator')
# stampaPercentDF(df_indicator)

# print('_'*50)
# df_dv = df_train.groupby(pd.cut(df_train['Data_value'], 1000))
# stampaPercentDF(df_dv)

print('_'*50)

pop_map = {
    'Maori': 1,
    'Whole pop': 2
}
df_train['Population'] = df_train['Population'].map(pop_map)
df_pop = df_train.groupby('Population')
print(df_pop.all())

print('_'*50)

cause_map = {
    'All': 1,
    'Assault': 2,
    'Drowing': 3,
    'Falls': 4,
    'Intentional self-harm': 5,
    'Motor vehicle traffic crashes': 6,
    'Work': 7
}
df_train['Cause'] = df_train['Cause'].map(cause_map)
df_cause = df_train.groupby('Cause')
for name, group in df_cause:
    print(name)

print('_'*50)

age_map = {
    '0-74 years': 1,
    '75+ years': 2,
    'All ages': 3
}
df_train['Age'] = df_train['Age'].map(age_map)
df_age = df_train.groupby('Age')
print(df_age.all())
print('*'*40)
print(df_train.head(10))

# ! ML
# logrec = LogisticRegression()
# Y_test = df_test['Severity']
# logrec.fit()

# print(acc_log)


