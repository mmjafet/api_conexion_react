const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 3000;

const uri = 'mongodb://admin:password@localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/tareas', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('tareas');
    const tareas = await collection.find({}).toArray();
    res.json(tareas);
  } finally {
    await client.close();
  }
});

app.post('/tareas', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('tareas');
    const result = await collection.insertOne(req.body);
    res.json(result);
  } finally {
    await client.close();
  }
});

app.put('/tareas/:id', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('tareas');
    const result = await collection.updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
    res.json(result);
  } finally {
    await client.close();
  }
});

app.delete('/tareas/:id', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('tareas');
    const result = await collection.deleteOne({ _id: ObjectId(req.params.id) });
    res.json(result);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});