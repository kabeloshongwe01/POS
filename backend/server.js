const express = require('express');
const file = require('./db.json');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

//Get products
app.get('/products', (req, res) => {
    res.json(file.products);
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO transaction (`id`, `description`, `price`, `qty`, `total`) VALUES (?)"
    const values = [req.body.id, req.body.description, req.body.price, req.body.qty, req.body.total]
    
    db.query(sql, [values], (err, data) => {
        if(err) return console.log(err);
        return console.log(data);
    })
})

app.get('/getTransactions', (req, res) => {
    db.query("SELECT * FROM transaction", (err, results) => {
        if(err) {
            console.log(err)
        } else {
            res.send(results)
        }
    })
})

app.listen(8081, () => {
    console.log("Listening on 8081");
})