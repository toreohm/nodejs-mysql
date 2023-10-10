const express = require("express");
const {clients} = require("../data/userInfo").data;
const {Data} = require("../controller/Data");
const routerData = express.Router();
let dataObject = new Data();

// Middleware
routerData.use(express.json());

routerData.get("/", (req, res) => {
  res.send(JSON.stringify(clients));
});

routerData.get("/filtrar", (req, res) => {
  const {rol1, rol2} = req.query;
  dataObject.rol1 = rol1;
  dataObject.rol2 = rol2;
  const result = dataObject.filtrarPorRoles(clients, dataObject.rol1, dataObject.rol2);

  if(result.length === 0) {
    res.status(404).json({code: 404, message: "No se encontraron resultados"});  
  }
  res.status(200).send(JSON.stringify(result));
});

routerData.patch("/actualizar/:id", (req, res) => {
  const keys = Object.keys(req.body);
  const info = req.body;
  const id = Number(req.params.id);
  const result = dataObject.actualizarById(id, keys, clients, info);
  res.status(200).json({status: 200, message: "Update succesful", record: result});
});

module.exports.routerData = routerData;