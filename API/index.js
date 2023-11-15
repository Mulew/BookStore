const express = require('express');
const { PORT } = require('./config');
require('./DB/dbConnection')
const Bookmodel = require('./model/model');
const app = express();
app.use(express.json());
//lets create new book here
app.post('/addbook', async (req, res) => {
    try {
      const { title, author, publishyear } = req.body;
      const newBook = await Bookmodel.create({ title, author, publishyear });
      res.status(201).json(newBook);
    } 
    catch (err) {
      console.error('Error creating book:', err);
      res.status(500).json({ message: err.message });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});