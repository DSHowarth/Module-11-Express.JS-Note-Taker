const apiRoute = require('express').Router();
const fs = require('fs');

apiRoute.get('/', (req, res) => {

    fs.readFile('../db/db.json', 'utf8', (data) => {
        res.send(data);
    })
})

apiRoute.post('/', (req, res) => {
    

    fs.readFile('../db/db.json', 'utf8', (data) => {
        console.log(req);
        const notesDB = JSON.parse(data);
        notesDB.append(req.body);
        fs.writeFile('../db/db.json', JSON.stringify(notesDB), (err) => {
            err ? console.log(err) : console.log('Added note to DB');
        });
    })
})