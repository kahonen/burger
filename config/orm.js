var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
   // var queryString = "SELECT * FROM burgers;";
    connection.query("SELECT * FROM burgers;", function(err, result) {
      if (err) {
        throw err;
      }
      //console.log("Select All" + results)
      cb(result);
    });
  },
  insertOne: function(burger_name, cb) {

    connection.query("INSERT INTO burgers SET ? ", {burger_name: burger_name}, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    //console.log("Insert One" + results)

  },
  updateOne: function(id, cb) {
    connection.query("UPDATE burgers SET ? WHERE ?",[{devoured: true}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      //console.log("update one" + results)

    });
  },

};

module.exports = orm;
