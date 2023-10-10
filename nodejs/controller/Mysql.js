let mysql = require("mysql");
let {ejecutarQuery} = require("../utils/mysql");
class Mysql {
  constructor() {
  let _name, _username, _description, _status, _id;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get username() {
    return this._username;
  }
  set username(username) {
    this._username = username;
  }
  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }
  get status() {
    return this._status;
  }
  set status(status) {
    this._status = status;
  }
  createConnection() {
    let connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3307,
      password: '123456',
      database: 'prueba'
  });
  return connection;
  }
  async insert(sql, con) {
    let resultado = await ejecutarQuery(con, sql);
    return resultado;
  }
  async select(sql, con) {
    let resultado = await ejecutarQuery(con, sql);
    return resultado;
  }
}

module.exports.Mysql = Mysql;