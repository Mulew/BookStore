const mongoose = require('mongoose')
const { MongoDBURL } = require('../config');
mongoose.connect(MongoDBURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

const DbConnection = mongoose.connection;

module.exports =  DbConnection;