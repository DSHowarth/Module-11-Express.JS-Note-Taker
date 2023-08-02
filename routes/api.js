const apiRoute = require('express').Router();
const fs = require('fs');
// module for generating unique IDs
const uuid = require('uuid');

//GET request sends all notes in database
apiRoute.get('/', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.send(data);
    })
})

//POST request adds new notes to database
apiRoute.post('/', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            res.json(err);
        }
        //Take current DB list, convert it from a string,
        //give the new note a unique ID, add it to database
        let notesDB = JSON.parse(data);
        req.body.id = uuid.v4();
        notesDB.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(notesDB), (err) => {
            err ? res.json(err) : res.json('Added note to DB');
        });
    })
})



module.exports = apiRoute;