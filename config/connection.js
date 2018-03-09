var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "q00xtafqh9kr33it",
  password: "n492ukgnlq8q2yy2",
  database: "b9a9lu3oqwywsbm1",
  port: 	3306
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
