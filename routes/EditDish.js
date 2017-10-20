var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

router.post('/', function(req, res, next) {
  mongo.connect("mongodb://xiaoluo:one123@ds125255.mlab.com:25255/recipe_box", function(err, db) {
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
