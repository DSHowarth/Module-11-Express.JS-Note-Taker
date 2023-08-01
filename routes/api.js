const apiRoute = require('express').Router();
const fs = require('fs');

apiRoute.get('/', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.send(data);
    })
})

apiRoute.post('/', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            res.json(err);
        }
        let notesDB = JSON.parse(data);


        notesDB.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(notesDB), (err) => {
            err ? res.json(err) : res.json('Added note to DB');
        });
    })
})

module.exports = apiRoute;