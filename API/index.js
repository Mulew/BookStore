const express = require('express');
const { PORT } = require('./config');
require('./DB/dbConnection')
const app = express();



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});