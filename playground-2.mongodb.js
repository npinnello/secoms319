/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
# import all libs 
from pymongo import MongoClient
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json
import pymongo
import pprint
import nbformat
from nbconvert.preprocessors import ExecutePreprocessor
# fill in uri (5pts)
uri = mongodb+srv://npinnello1234:<Iowastate25!>@cluster0.xxbbafu.mongodb.net/?retryWrites=true&w=majority
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    capture = client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!", capture)
except Exception as e:
    print(e)
# database (do not change)
db = client['test']
if 'litcovidtest' in db.list_collection_names():
    db['litcovidtest'].drop() 
posts = db['litcovidtest'] 
# Loading or Opening the json file
with open('litcovid2BioCJSON_small.json') as file:
    file_data = json.load(file)
     
# Inserting the loaded data in the Collection
# if JSON contains data more than one entry
# insert_many is used else inser_one is used
# fill in (5 pts)


# Count the number of documents in this corpus
# fill in (10 pts)
result1=
print("Count the number of documents in this corpus", result1)
# find the fields for the first document in this corpus
# fill in (10 pts)
result2=
pprint.pprint(result2)
# Count the number of publications for each journal. Sort the result in descending order and print top 10
# fill in (10 pts)
result3=
for post in result3:
    pprint.pprint(post)
# Find all papers published in Nature journal. Print their pmids and titles
# fill in (10 pts)
result4 = 
for post in result4:
    pprint.pprint(post['pmid'])
    pprint.pprint(post['passages'][0]['text'])
# Count the number of publications for each author. Sort the results in descending order and return the top 10 authors
# fill in (10 pts)
result5= 
for post in result5:
    pprint.pprint(post)
# Find the papers written by ‘Wang J’, print the paper pmids, journal names and titles
# fill in (10 pts)
result6=
for post in result6:
    pprint.pprint(post['pmid'])
    pprint.pprint(post['journal'])
    pprint.pprint(post['passages'][0]['text'])
# Create text index on passages.text
# fill in
posts.create_index(
    [    ]
)
# count the number of publications that contains the phrase "COVID-19 Vaccine"
# fill in (10 pts)
result7=
print("Count the number of publications that contains the phrase 'COVID-19 Vaccine'", result7)
# count the number of publications that contains the words "COVID-19" or "Vaccine"
# fill in (10 pts)
result8=
print("Count the number of publications that contains the words 'COVID-19' or 'Vaccine'", result8)
# count the number of publications that contains the words "COVID-19" and "Vaccine"
# fill in (10 pts)
result9=
print("Count the number of publications that contains the words 'COVID-19' and 'Vaccine'", result9)