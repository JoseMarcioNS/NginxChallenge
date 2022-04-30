const express = require('express')
const app = express()
const port = 3000
const config ={
    host:'db',
    user:'root',
    password:'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
let createPeople = `create table if not exists people(
    id int not null auto_increment,
    name varchar(255),
    primary key(id)
  )`;
  connection.query(createPeople) 
  
const sqlDelete = "Delete FROM people"
const sqlInsert = "Insert into people(name) values('Marcio')"
const sqlSelect = "SELECT * FROM people"
connection.query(sqlDelete)
connection.query(sqlInsert)
connection.query(sqlSelect)
var people =''
 connection.query("SELECT * FROM people", function (err, result, fields) {
     if (err) throw err;
     Object.keys(result).forEach(function(key) {
      var row = result[key];
        people = people + '<li>'+row.name+'</li>'
        console.log(row.name)
     });
  });
connection.end()
app.get('/',(req,res)=>{
      res.send("<h1>Full Cycle Rocks!</h1><h3>Lista de nomes cadastrada no banco de dados.</h3>" + people)
});
app.listen(port,()=>{
   
    console.log('Rodando!!!!')
});