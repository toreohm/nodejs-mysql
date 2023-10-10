const express = require("express");
const {Mysql} = require("../controller/Mysql");
const routerMysql = express.Router();
let mysql = new Mysql();

// Middleware
routerMysql.use(express.json());

routerMysql.post("/insert", async (req, res) => {
  const {name, username, description, status} = req.body;
  mysql.name = name;
  mysql.username = username;
  mysql.description = description;
  mysql.status = status;

  const sql = `INSERT INTO usuarios (name, username, description, status) VALUES ("${mysql.name}","${mysql.username}","${mysql.description}",${mysql.status})`;
  let connection = mysql.createConnection();
  let result = await mysql.insert(sql, connection);
  console.log("final result ", result);
  res.status(201).json({status: 201, message: "Registro creado", result: result});
});

routerMysql.get("/", async (req, res) => {
  const sql = "SELECT * FROM usuarios";
  let connection = mysql.createConnection();
  let result =  await mysql.selectAll(sql, connection);
  console.log("final result", result);
  res.status(200).json({status: 200, message: "Consulta hecha", result: result});
});

routerMysql.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  mysql.id = id;
  const sql = `SELECT * FROM usuarios WHERE id=${mysql.id}`;
  let connection = mysql.createConnection();
  let result = mysql.select(sql, connection);
  result.then(answer => {
    console.log("final result", answer);
    res.status(200).json({status: 200, message: "Consulta hecha", result: answer});
  }).catch(error => res.status(500).json({status: 500, message: error}));
});
module.exports.routerMysql = routerMysql;