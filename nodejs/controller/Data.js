class Data {
  constructor() {
    let _rol1, _rol2;
  }
  set rol1(rol) {
    this._rol1 = rol;
  }
  get rol1() {
    return this._rol1;
  }
  set rol2(rol) {
    this._rol2 = rol;
  }
  get rol2() {
    return this._rol2;
  }
  filtrarPorRoles(data, rol1, rol2) {
    return data.filter(record => {
      let result = (record.roles.indexOf(rol1) >= 0) && (record.roles.indexOf(rol2) >= 0) ? true : false;
      return result;
     });
  }
  actualizarById(id, keys, data, info) {
  const idx = data.findIndex(elem => elem.id === id);
  keys.forEach(key => {data[idx][key] = info[key];});
  return data[idx];
  }
}

module.exports.Data = Data;