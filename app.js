// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.render('index', { name: '' });
});

// Define a route for the login page
app.get('/login', (req, res) => {
  res.render('login');
});



app.get('/marketplace', (req, res) => {
  res.render('marketplace');
});

app.get('/stats', (req, res) => {
  res.render('stats');
});

app.get('/services', (req, res) => {
  res.render('services');
});


app.get('/encryption', (req, res) => {
  res.render('encryption');
});

app.get('/aboutus', (req, res) => {
  res.render('aboutus');
});

app.get('/sender', (req, res) => {
  res.render('sender');
});
app.get('/receiver', (req, res) => {
  res.render('receiver');
});

app.get('/storage-form', (req, res) => {
  res.render('storage-form');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
