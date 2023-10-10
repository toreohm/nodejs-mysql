
 function ejecutarQuery(con, sql) {
  return new Promise((resolve, reject) => {
    con.connect((err) => {
      if (err) reject(err);
      con.query(sql, function (error, result) {
        con.end();
        if (error) reject (error); 
        resolve(result);
      });
    });
  });
}
module.exports.ejecutarQuery = ejecutarQuery;