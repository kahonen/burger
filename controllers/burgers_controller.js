var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log({burgers: data});
    res.render("index", hbsObject);
  });
});

//router.post("/api/burgers", function(req, res) {
  router.post("/", function(req, res) {

  burger.insertOne(
    req.body.burger_name
  , function() {
    //console.log(result)
   // res.json({ id: result.insertId });
   res.redirect("/")
  });
});

//router.put("/api/burgers/:id", function(req, res) {
  router.put("/:id", function(req, res) {
    console.log("route hit")
    var id = req.params.id;
    console.log(req.params)
  burger.updateOne(id, function() {
    // if (result.changedRows == 0) {
    //   // If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
    res.redirect("/")
  });
});

// Export routes for server.js to use.
module.exports = router;
