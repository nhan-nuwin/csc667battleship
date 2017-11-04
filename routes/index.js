var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', 
	(request, response) => {
  	db.any(`INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now()}')`)
	  .then( _ => db.any(`SELECT * FROM test_table`) )
	  .then( results => response.json( results ))
	  .catch( error => {
	  console.log( error )
	  response.json({ error })
	})
	/*function (req, res, next){
		res.render('index', {
			title: 'battleship'
		}
	)*/
});

module.exports = router;
