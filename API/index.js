const express = require('express');
const { PORT, MongoDBURL } = require('./config');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(MongoDBURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});