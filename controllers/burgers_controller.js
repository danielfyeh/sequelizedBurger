var db = require('../models');
var express = require('express');
var router  = express.Router();

// Displays all burgers available from the mySQL db
router.get('/', function(req,res) {
  db.Burger.findAll({
  }).then(function(burger_data){
    res.render('index', {
      burger_data
    }); 
  })
})

// Devours burger by updating the devoured boolean to true in the mySQL db
router.post('/burger/:id', function(req,res){
  console.log(req.params.id);
  db.Burger.update(
    {
      devoured: true,
    },
    {
      where: {
        id: req.params.id
    }
  }).then(function() {
    res.redirect('/');
  });
});

// Add a new burger to the mySQL db
router.post('/add', function(req,res) {
  console.log(req.body.burger_name + " burger added to database!");
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: 0
  }).then(function(){
    res.redirect('/');
  });
});

// Deletes all burgers in the mySQL db
router.post('/delete', function(req,res) {
  db.Burger.destroy({
    where: {}
  }).then(function(){
    res.redirect('/');
  });
});

module.exports = router;