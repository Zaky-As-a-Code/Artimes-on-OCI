const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../database');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            return res.status(500).send('Error saving user');
        }
        res.status(201).send('User signed up successfully');
    });
});

module.exports = router;
