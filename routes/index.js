var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/dashboard', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/forget-password', function(req, res, next) {
  res.render('forget-password', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
});
router.get('/user-add', function(req, res, next) {
  res.render('user-add', { title: 'Express' });
});
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express' });
});
router.get('/companies', function(req, res, next) {
  res.render('companies', { title: 'Express' });
});
router.get('/company-add', function(req, res, next) {
  res.render('company-add', { title: 'Express' });
});
router.get('/company-edit', function(req, res, next) {
  res.render('company-edit', { title: 'Express' });
});
router.get('/company', function(req, res, next) {
  res.render('company', { title: 'Express' });
});
router.get('/deliveries', function(req, res, next) {
  res.render('deliveries', { title: 'Express' });
});
router.get('/delivery-add', function(req, res, next) {
  res.render('delivery-add', { title: 'Express' });
});
router.get('/delivery-edit', function(req, res, next) {
  res.render('delivery-edit', { title: 'Express' });
});
router.get('/delivery', function(req, res, next) {
  res.render('delivery', { title: 'Express' });
});


module.exports = router;
