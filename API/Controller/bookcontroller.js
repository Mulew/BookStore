const express = require('express');
const Bookmodel = require('../model/model');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const { title, author, publishyear } = req.body;
  
      const newBook = await Bookmodel.create({ title, author, publishyear });
  
      res.status(201).json({message : newBook + "Book Added"});
    } catch (err) {
      console.error('Error creating book:', err);
      res.status(500).json({ message: 'Failed to create book' + err.message });
    }
});

router.get('/', async (req, res) => {
  try {
    const books = await Bookmodel.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/:id', async (req, res) => {
    try {
      const book = await Bookmodel.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } 
    catch (err) {
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid book ID' });
      }
      res.status(500).json({ message: err.message });
    }
  });
  //put means update
  router.put('/:id', async (req, res) => {
      const id = req.params.id;
      const title = req.body.title;
      const author = req.body.author;
      const publishyear = req.body.publishyear;
      try {
        const updatedBook = await Bookmodel.findByIdAndUpdate(id,{ title,author,publishyear},{ new: true });
        res.json(updatedBook);
      } 
      catch (err) {
          if (err.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid book ID' });
          }
          res.status(500).json({ message: err.message });
        }
    });


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletebook = await Bookmodel.findByIdAndDelete(id);

        if (!deletebook) {
            return res.status(404).send("Book not deleted");
        }
        return res.status(201).json({ message: "Book deleted successfully!" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;