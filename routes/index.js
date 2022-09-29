var express = require('express');
var router = express.Router(); 

var client = require('../db/database');

client.query('SELECT VERSION();', (err, res) => {   
	client.end();   
	json = res.rows;
});
	

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.render('index', { title: "Matthew Piatek's HW3", version: json[0].version });
});

module.exports = router;
