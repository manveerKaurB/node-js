const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://manveerkaur2906:52K0aPAVzjNfJCpC@manveerdb.fqmrc.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // insert field 
//   const data = {
//     firstName: 'komal',
//     lastName: 'sharma'
//   }

//   const insertResult = await collection.insertMany([data]);
//   console.log('Inserted documents =>', insertResult);


const countResult = await collection.countDocuments({});
console.log("count of documents in user collection =>", countResult);

// find document with firstname manveer 
const findManveerDoc = await collection.find({firstName: 'manveer'}).toArray();
console.log("manveer doc =>", findManveerDoc);
// fetch data
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());