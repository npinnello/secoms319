const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

// Define a schema and model for your data
const MyModel = mongoose.model('MyModel', { name: String });

// Define a route for handling POST requests
app.post('/data', (req, res) => {
  const myData = new MyModel({ name: req.body.name });
  myData.save().then(() => {
    res.send('Data saved successfully');
  }).catch((error) => {
    res.status(500).send(error);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});