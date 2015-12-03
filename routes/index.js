var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MeetUp@BlackRock' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'BlackRock' });
});

/* GET ad listing page. */
router.get('/ads', function(req, res) {
    var db = req.db;
    var collection = db.get('adcollection');
    collection.find({},{},function(e,docs){
        res.render('adlist', {
            "title" : "Puppies looking for home!",
            "ads" : docs
        });
    });
});

/* GET angular demo page. */
router.get('/home', function(req, res) {
    res.render('home', {
        "title" : "Puppies looking for home!"
    });
});

/* GET angular demo page. */
router.get('/puppies', function(req, res) {
    res.render('puppies', {
        "title" : "Puppies looking for home!"
    });
});

module.exports = router;
