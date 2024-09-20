import express from 'express';
import bodyParser from 'body-parser'; // Assuming you still need body-parser
const app = express();
const PORT = 2000;

const handleBodyParsing = bodyParser.json();

app.get('/api/items', (req, res) => {
  res.status(200).json({ message: 'GET request - Fetching all items' });
});

app.post('/api/items', handleBodyParsing, (req, res) => {
  const newItem = req.body;
  res.status(201).json({ message: `POST request - Adding new item, data: ${newItem}` });
});

app.put('/api/items/:id', handleBodyParsing, (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body; 
  res.status(200).json({ message:  `PUT request - Updating item ${itemId}, data: ${updatedItem}`});
});