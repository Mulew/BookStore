const express = require('express');
const Bookmodel = require('../model/model');

const router = express.Router();

router.post('/addbook', async (req, res) => {
    try {
      const { title, author, publishyear } = req.body;
  
      const newBook = await Bookmodel.create({ title, author, publishyear });
  
      res.status(201).json({message : newBook + "Book Added"});
    } catch (err) {
      console.error('Error creating book:', err);
      res.status(500).json({ message: 'Failed to create book' + err.message });
    }
});

router.get('/listbooks', async (req, res) => {
    try {
      const books = await Bookmodel.find();
      res.json({
        count: books.length,
        data: books

      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

router.get('/listbooks/:id', async (req, res) => {
    try {
      const books = await Bookmodel.findById(req.params.id);
      res.json({
        count: books.length,
        data: books

      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

router.put('/updatebook/:id', async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const author = req.body.author ;
    try {
      const updatedBook = await Bookmodel.findByIdAndUpdate(id,{ title,author},{ new: true });

      res.json(updatedBook);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  });
module.exports = router;