import express from 'express';
import bodyParser from 'body-parser'; // Assuming you still need body-parser
const app = express();
const PORT = 2000;

const handleBodyParsing = bodyParser.json();

app.get('/api/items', (req, res) => {
  res.status(200).json({ message: 'GET request - Fetching all items' });
});