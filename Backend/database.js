const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
    host: 'DB-Host',
    port: 3306,
    user: 'DB-User',
    password: 'DB-Password',
    database: 'Database-Name'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;
