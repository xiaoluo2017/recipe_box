var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var config = require('./config');

router.post('/', function(req, res, next) {
  mongo.connect(config.database, function(err, db) {
    if (err) throw err;
    var collection = db.collection("dishes");
    collection.update({
      _id: ObjectId(req.body._id)
    }, {
      name: req.body.name,
      ingredients: req.body.ingredients
    }, function (err) {
      if (err) throw err;
      db.close();
    })
    res.send();
  })
});

module.exports = router;
