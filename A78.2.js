const express = require('express');
const mysql  = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '192.168.0.33',
    user: 'daniel',
    password: 'daniel',
    database: 'WBA'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Neue Nachricht hinzufügen
app.post('/news', (req, res) => {
    const { message } = req.body;
    const sql = 'INSERT INTO news (message) VALUES (?)';
    db.query(sql, [message], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ newsid: result.insertId, message, time: new Date() });
    });
});

// Nachrichten von einem bestimmten Tag abrufen
app.get('/news/date/:date', (req, res) => {
    const { date } = req.params;
    const sql = 'SELECT * FROM news WHERE DATE(time) = ?';
    db.query(sql, [date], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Nachricht mit einer bestimmten newsid ändern
app.put('/news/:newsid', (req, res) => {
    const { newsid } = req.params;
    const { message } = req.body;
    const sql = 'UPDATE news SET message = ? WHERE newsid = ?';
    db.query(sql, [message, newsid], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.affectedRows === 0) return res.status(404).send('Nachricht nicht gefunden');
        res.send('Nachricht aktualisiert');
    });
});

// Löschen einer Nachricht mit newsid
app.delete('/news/:newsid', (req, res) => {
    const { newsid } = req.params;
    const sql = 'DELETE FROM news WHERE newsid = ?';
    db.query(sql, [newsid], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.affectedRows === 0) return res.status(404).send('Nachricht nicht gefunden');
        res.send('Nachricht gelöscht');
    });
});

// Fehlerbehandlung bei ungültigen Anfragen
app.use((req, res) => {
    res.status(404).send('Route nicht gefunden');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});