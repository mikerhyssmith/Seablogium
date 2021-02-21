import pandas as pd

savings_df = pd.read_csv('./data/FIRE-Savings.csv')
income_df = pd.read_csv('./data/FIRE-Income.csv')

savings_df["Date"] = pd.to_datetime(savings_df["Date"], dayfirst=True)
income_df["Date"] = pd.to_datetime(income_df["Date"], dayfirst=True)

sum_by_month = savings_df.groupby(pd.Grouper(key='Date', freq='MS')).sum()

concatenated = pd.merge(left=sum_by_month, right=income_df, how="left", on="Date")

concatenated["percentage"] = concatenated["Saved"]/concatenated["Income"] * 100

minimal_output = concatenated.drop(columns=["Saved", "Income"])

minimal_output.to_json(path_or_buf='./data/output/savings.json', orient='records')
