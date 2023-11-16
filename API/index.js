const express = require('express');
const { PORT } = require('./config');
require('./DB/dbConnection');
const route = require('./Controller/bookcontroller');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());

//lets create new book here
app.use('/books',route)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});