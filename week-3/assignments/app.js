const express = require('express');
const sumRouter = require('./routes/sumRoute.js');

const app = express();
const port = 3000;

// serve static files
app.use(express.static('public'));

app.use('/', sumRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
