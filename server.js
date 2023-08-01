const express = require('express');
const api = require('./routes/api');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// redirect api requests to api.js
app.use('/api/notes', api);

// Allow access to public css/js, landing page index.html
app.use(express.static('public'));

// Notes page route
app.get('/notes', (req, res) => {
    res.send(path.join(__dirname, 'notes.html'));
})

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log('Server listening on ' + PORT)
})