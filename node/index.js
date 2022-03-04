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

app.get('/',  async (req, res) => {
    var response =  '<h1> Full cycle no Node.JS</h1><ul>'

    const rows = await  connection.query("SELECT * FROM people", function (err, rows, fields) {
        if (err) throw err;
        Object.keys(rows).forEach(function(key) {
            var row = rows[key];
            response += '<li>'+row.name+'</li>';
        });

        response +=  '</ul>'
        res.send(response)

    });
})

app.listen(port, () => {
    console.log('Rodando na porta '+port)
})