const express = require("express");
const app = express();
const PORT = process.env.PORT_TEST || 3001;

//routers
const {routerData} = require("./routing/crud.js");
app.use("/api/clients", routerData);

const {routerMysql} = require("./routing/mysql.js");
app.use("/api/mysql", routerMysql);
//routing

app.get("/", (req, res) => {
  res.send("<h1 style='color:dodgerblue;text-align:center;'>Node.js y Express</h1>");
});

app.listen(PORT, () => {
  console.info("Escuchando en el puerto " + PORT);
});