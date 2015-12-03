var express = require('express');
var logger = require('morgan');
var router = express.Router();

router.get('/puppy', function(req, res, next) {
    var db = req.db;
    console.log(req.query);
    var fromInd = req.query.from != null ? req.query.from : 0;
    var collection = db.get('adcollection');
    var query = {};
    console.log(req.query.breed);
    if (req.query.breed ==! null) {
      console.log(req.query.breed);
      query.breed = req.query.breed;
    }
    if (req.query.city ==! null) {
      query['location.city'] = req.query.city;
    }
    if (req.query.gender ==! null) {
      query.gender = req.query.gender;
    }
    console.log(query);
    collection.find(query, {limit:5, skip:fromInd}, function(e , docs){
        if (e == null) {
          res.json(docs);
        } else {
          next(new Error(e));
        }
    });
});

router.get('/cities', function(req, res, next) {
    res.json(['London','Liverpool','Manchester','Edinbrough','Leeds','Leytonstone', 'Leicester']);
});

router.get('/breeds', function(req, res, next) {
    res.json(['husky','pug','puppies','cockapoo','dachshound']);
});



router.get('/puppy/:id', function(req, res, next) {
    var db = req.db;
    var id = req.params.id;
    var collection = db.get('adcollection');
    collection.findById(id, function(e , doc){
        if (e == null) {
          res.json(doc);
        } else {
          next(new Error(e));
        }
    });
});

router.post('/puppy/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('adcollection');

    collection.insert(req.body, function(e , doc){
        if (e != null) {
          res.json(doc);
        } else {
          next(new Error(e));
        }
    });
});


module.exports = router;
