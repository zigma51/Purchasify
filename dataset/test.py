import pandas
df = pandas.read_csv("flipkart_com-ecommerce_sample.csv")

for x in range(20000):
    df["product_specifications"][x] = str(df["product_specifications"][x]).replace("=>",":")
    df["product_specifications"][x] = str(df["product_specifications"][x]).replace(', "value"',"")
    df["product_specifications"][x] = str(df["product_specifications"][x]).replace('"key":',"")
    df["product_category_tree"][x] = str(df["product_category_tree"][x]).replace(">>",",")

#print(df["product_specifications"][0])

export_csv = df.to_csv (r'C:\Purchefiy\Purchasify\dataset\final.csv', index = None, header=True) #Don't forget to add '.csv' at the end of the path