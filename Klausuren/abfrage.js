const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Verbindung zur MariaDB-Datenbank herstellen
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',  // Ändere dies zu deinem tatsächlichen Passwort
    database: 'weather_db'  // Name der Datenbank
});

// Route für GET-Anfrage an /data
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM weather ORDER BY measured DESC LIMIT 1';
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Datenbankfehler' });
        } else {
            res.json(results[0]);
        }
    });
});

// Server starten
app.listen(port, () => {
    console.log(Server läuft auf http://localhost:${port});
});