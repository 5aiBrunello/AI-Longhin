import pandas as pd
from sklearn.linear_model import LogisticRegression

# ! Funzioni 

def stampaDF(df):
    for name, group in df:
    # La funzione value_counts() ritorna la percentuale di apparizione per ogni elemento univoco,
    # è come un groupby però ci aggiunge le percentuali (se aggiungo il parametro normalize) altrimenti ritornebbe solo il numero di volte in cui i valori appaiono
        group = round(group['Severity'].value_counts(normalize=True) * 100, 2)
        print(name)
        print(group)
        print('-'*10)


# ! Data Analysis
    
df_train = pd.read_csv('medical-train.csv')
df_test = pd.read_csv('medical-test.csv')

# Elimino tutti i valori Nan dovuti dall'eliminazione dei dati
df_train = df_train[~(pd.isna(df_train.iloc[:,0]))]

# Elimino tutti i valori Nan
df_test = df_test[~(pd.isna(df_test.iloc[:,0]))]

df_train = df_train.drop(['Series_reference', 'Validation', 'Lower_CI', 'Upper_CI'], axis=1)
print(df_train.columns.values)



data_value = df_train.groupby(pd.cut(df_train['Data_value'], [0, 50, 100, 200]))
stampaDF(data_value)
print('_' * 40)




# ! ML
# ??????????
# logreg = LogisticRegression()
# logreg.fit(df_type, df_train)
# print(df_test)
# Y_pred = logreg.predict(df_test)
# acc_log = round(logreg.score(df_type) * 100, 2)
# acc_log = round(logreg.score(df_test) * 100, 2)

# print(acc_log)


