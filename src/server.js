const express = require('express');
const app = express();
const cors = require('cors');
 
app.use(cors());
app.use(express.json());
//const mongoose = require('mongoose');

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
const database = client.db('qasim');
const clc = database.collection('todo');
 
// Define routes
app.get('/',(req, res) => {
  res.send("Server is running...");
   
});

app.post('/saveitem', async (req, res) => {
  try {
    console.log(req.body);
    if(JSON.stringify(req.body)==='{}') {res.send("Req body is empty!");}  
    else {
    const result =await clc.insertOne(req.body);
    res.json(result);
  }
  } catch (err) {
    // Ensures that the client will close when you finish/error
     
  }
   
});

app.get('/getitem', async (req, res) => {
    
  try {
   
    const cursor =await clc.find();
    const documents = await cursor.toArray();
    console.log("data fertched from server"+documents)
    res.json(documents);
  } catch(err) {
     
  }
});
//deleting a record
app.delete('/delete_item/:id', async (req, res) => {
  const id= +req.params.id;
  
  // Find the index of the item with the given ID
  const cursor = await clc.find();
  const documentsArray = await cursor.toArray();
   const documents = documentsArray.filter((value, index) => index === id);
   const result=await clc.deleteOne({_id:documents[0]._id});
  try  {
    res.json(result);
  } catch(err) {
    res.status(404).json({ message: 'Error in response'});
  }
});
//Updating a record
app.put('/changeItemStatus/:id', async (req, res) => {
  const id= +req.params.id;
  console.log("inside put function with id",id)
  // Find the index of the item with the given ID
  const cursor = await clc.find();
  const documentsArray = await cursor.toArray();
   const documents = documentsArray.filter((value, index) => index === id);
    
   const result=clc.updateOne( { _id:documents[0]._id}, { $set: { status: true } } ) 
  try  {
    res.json(result);
  } catch(err) {
    res.status(404).json({ message: 'Error in response'});
  }
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
