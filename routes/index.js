const express = require('express');
const prepPwd = require('../services/preparePassword');
const getBGPresents = require('../services/getPresents');

module.exports = function () {
  const router = express.Router();

  router.get('', function (req, res) {
    res.render('index');
  });

  router.get('/novios', function (req, res) {
    res.render('login');
  });

  router.get('/regalos-disponibles', function (req, res) {
    res.render('presentsList');

  });

  router.post('/getPwd', function (req, res) {
    const encryptedPwd = prepPwd(req.body.password);
    res.status(200);
    res.send(encryptedPwd);
  });

  return router
};