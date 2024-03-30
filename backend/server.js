const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alaa",
    database: "signup"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    return res.json("From backend side");
});

app.get('/login', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8001, () => {
    console.log("Listening");
});
