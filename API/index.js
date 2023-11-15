const express = require('express');
const { PORT } = require('./config');
require('./DB/dbConnection');
const route = require('./Controller/bookcontroller');
const app = express();
app.use(express.json());

//lets create new book here
app.use('/',route)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});