const express = require('express');
const api = require('./routes/api');
const app = express();
const path = require('path');

//Port will use Heroku value, or 3001 for dev/test
const PORT = process.env.PORT || 3001;


//Middleware to parse input
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// redirect api requests to api.js
app.use('/api/notes', api);

// Allow access to public css/js, landing page index.html
app.use(express.static('public'));

// Notes page route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})


app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log('Server listening on ' + PORT)
})