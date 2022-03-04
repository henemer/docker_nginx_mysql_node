const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people (name) VALUES ('Emerson')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> Full cycle no Node.JS</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta '+port)
})