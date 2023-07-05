const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '02112003Huy',
  database: 'Users',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
