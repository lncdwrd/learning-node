const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// Dotenv
require('dotenv').config();

// Express App
const app = express();

// Connecting To MongoDB
const mongodb_user = process.env.DB_USERNAME;
const mongodb_password = process.env.DB_PASSWORD;
const dbURI = `mongodb+srv://${mongodb_user}:${mongodb_password}@cluster0.iyljx.mongodb.net/node-tut?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  // Listen for requests only after connecting to db
  .then(result => app.listen(3000))
  .catch(err => console.log(err))

// EJS View Engine
app.set('view engine', 'ejs');

// Static Files & Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

// Routing
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
});

app.use(blogRoutes);

// 404 page
app.use((req, res) => {
  res
    .status(404)
    .render('404', { title: '404' });
});