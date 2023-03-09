# From https://www.geeksforgeeks.org/convert-text-file-to-json-in-python/

# Adjusted by: Abraham Aldaco
# Nov 22, 2022

# Python program to convert text
# file to JSON


import json

def removeLeadingSpaces(product):
    newListproduct = []
    for element in product:
        element=element.strip()
        element=element.strip('\n')
        newListproduct.append(element)
    return newListproduct

def createDictionary(product,productName):
    # productName = 'Ceiling Fan' 'Wall Light' or 'Jacket'
    dicTemp = {}
    i = 0
    while i<len(product):
        # creating dictionary for each employee
        if productName == 'Ceiling Fan':
            dicTemp[fieldsCeilingFan[i]]= product[i]
        elif productName == 'Wall Light':
            dicTemp[fieldsWallLight[i]]= product[i]
        elif productName == 'Jacket':
            dicTemp[fieldsJacket[i]]= product[i]
        i = i + 1
    return dicTemp


# the file to be converted
filename = 'Catalog_of_Products.csv'

# resultant dictionary
dictCeilingFan = {}
dictWallLight = {}
dictJacket = {}
dictGeneral = {}

listCeilingFan = []
listWallLight = []
listJacket = []

# fields in the sample file
productType = ['Ceiling Fan','Wall Light','Jacket']
fieldsCeilingFan =['productId', 'productName', 'size', 'brand','shortDescription','Description','priceList']
fieldsWallLight = ['productId', 'productName', 'size', 'brand','shortDescription','Description','priceList']
fieldsJacket =    ['productId', 'productName', 'size','brand','shortDescription','Description','priceList']

with open(filename) as catalog:
    # Read line by line
    for line in catalog:
        
        # reading line by line from the text file
        product = line.split(',')
        product = removeLeadingSpaces(product)

		# for output see below
        print(product)

        if (product[1] == 'Ceiling Fan'):
            listCeilingFan.append(createDictionary(product, 'Ceiling Fan'))

        elif (product[1] == 'Wall Light'):
            listWallLight.append(createDictionary(product,'Wall Light'))

        elif (product[1] == 'Jacket'):
            listJacket.append(createDictionary(product, 'Jacket'))
        else:
            continue


# close catalog file
catalog.close()

# create general dictionary
dictGeneral['Ceiling Fan']=listCeilingFan
dictGeneral['Wall Light']=listWallLight
dictGeneral['Jacket']=listJacket

# creating json file	
out_file = open("06_1_43_Catalog_of_Products.json", "w")
json.dump(dictGeneral, out_file, indent = 4)
out_file.close()

