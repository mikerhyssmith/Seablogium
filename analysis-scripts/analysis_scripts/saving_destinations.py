import pandas as pd

savings_df = pd.read_csv('./data/FIRE-Savings.csv')

renamed = savings_df.rename(columns={"Destination": "target", "Source": "source"})

grouped = renamed.groupby(['source', 'target']).sum()

total = grouped["Saved"].sum()

grouped['value'] = grouped['Saved'] / total * 100

cleaned = grouped.drop(columns=['Saved'])

cleaned.to_json(path_or_buf='./data/output/destinations.json', orient='table')

# Source: 'barclays/ monzo / etc
# Target: freetrade, vanguyard etc
# Value: as percentage