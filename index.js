require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const router = require('./app/router');
const app = express();

app.use( morgan('dev'));

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
    console.log(`Good day for a swell battle! It's on port:${PORT}!`);
});