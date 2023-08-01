const apiRoute = require('express').Router();
const fs = require('fs');

apiRoute.get('/notes', (req, res) => {

    fs.readFile('../db/db.json', 'utf8', (data) => {
        res.send(data);
    })
})