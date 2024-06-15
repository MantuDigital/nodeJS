const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs');
})

app.get('/about', (req, res) => {
  res.render('home.ejs');
})

app.listen(port);
