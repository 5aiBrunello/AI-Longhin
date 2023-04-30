import pandas as pd

df = pd.read_csv('CSVCompleto.csv')

print(df.groupby('Indicator').all())