const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const sumRouter = require('./routes/sumRoute.js');

const app = express();
const port = 3000;

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// cookie parser
app.use(cookieParser());

// serve static files
app.use(express.static('public'));

app.use('/', sumRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
