const router = require("express").Router();
var path = require("path")

router.get("/", (req, res) => {
    console.log("We hit the route", __dirname) 
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  }); 

router.get("/exercise", (req, res) => {
    console.log("We hit the route", __dirname) 
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
  });

router.get("/stats", (req, res) => {
    console.log("We hit the route", __dirname) 
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
  });

  module.exports = router;