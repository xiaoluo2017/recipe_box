var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var config = require('./config');

router.get('/', function(req, res, next) {
  mongo.connect(config.database, function(err, db) {
    if (err) throw err;
    var collection = db.collection("dishes");
    collection.find().toArray(function(err, documents) {
      if (err) return console.log(err);
      res.send(documents);
    })
  })
});

module.exports = router;
