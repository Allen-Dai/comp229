/* 
 * @file index.js
 * @author Allen Day / ZEZHAO DAI
 * @student_id 301136181
 * @date sept/30/2021
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
