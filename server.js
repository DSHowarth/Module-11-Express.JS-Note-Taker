const express = require('express');

const app = express();

// redirect api requests to api.js
app.use('/api', api);

// Allow access to public css/js, landing page index.html
app.use(express.static('public'));

// Notes page route
app.get('/notes', (req, res) => {
    res.send(path.join(__dirname, 'notes.html'));
})