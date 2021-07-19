const express = require('express');
const app = express();

// Home
app.get('/', (req, res) => res.send('Home Page Route'));

// About
// app.get('/about', (req, res) => res.send('About Page Route'));

// POrtfolio
// app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

// app.get('/contact', (req, res) => res.send('Contact Page Route'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
