import express from 'express';
import bodyParser from 'body-parser'; // Assuming you still need body-parser
const app = express();
const PORT = 2000;

const handleBodyParsing = bodyParser.json();