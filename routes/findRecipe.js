var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
  mongo.connect("mongodb://xiaoluo:one123@ds125255.mlab.com:25255/recipe_box", function(err, db) {
    if (err) throw err;
    var collection = db.collection("dishes");
    collection.find().toArray(function(err, documents) {
      if (err) return console.log(err);
      res.send(documents);
    })
  })
});

module.exports = router;
