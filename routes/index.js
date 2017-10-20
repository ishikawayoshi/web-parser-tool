var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var {mysql_s} = require('../config/config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(mysql_s.database, mysql_s.username, mysql_s.password,{
  dialect:mysql_s.dialect
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync({force:true})
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.get({
      plain: true
    }));
  });



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/init', function(req, res, next) {
  var connection = mysql.createConnection(config.mysql);
  var result = '';
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    var temp = results[0].solution;
    console.log('The solution is: ', temp);
    result = 'The solution is: ' + temp;
  });
  connection.end();
  res.render('index', { title: result });
});

router.get('/close', function(req, res, next) {
  
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
