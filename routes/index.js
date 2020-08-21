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
router.get('/delivery-confirmed', function(req, res, next) {
  res.render('delivery-confirmed', { title: 'Express' });
});
router.get('/delivery-picking', function(req, res, next) {
  res.render('delivery-picking', { title: 'Express' });
});
router.get('/delivery-finish', function(req, res, next) {
  res.render('delivery-finish', { title: 'Express' });
});
router.get('/delivery-delivering', function(req, res, next) {
  res.render('delivery-delivering', { title: 'Express' });
});
router.get('/delivery-cancel', function(req, res, next) {
  res.render('delivery-cancel', { title: 'Express' });
});
router.get('/delivery-dispatch', function(req, res, next) {
  res.render('delivery-dispatch', { title: 'Express' });
});
router.get('/401', function(req, res, next) {
  res.render('401', { title: 'Express' });
});
router.get('/404', function(req, res, next) {
  res.render('404', { title: 'Express' });
});
router.get('/500', function(req, res, next) {
  res.render('500', { title: 'Express' });
});



module.exports = router;
