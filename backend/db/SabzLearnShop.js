const mysql = require('mysql2');

const SabzlearnShopDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mitinabi7",
  database: "sabzlearn_shop",
});

module.exports = SabzlearnShopDB;
