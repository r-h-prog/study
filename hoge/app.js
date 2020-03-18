'use strict'
// HTTP通信できるようにする
var http = require('http');
var express = require('express');
var path = require('path');

var app = express()

// テンプレートエンジンとして設定する
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res, next) {
  return res.render('index', {title: 'Hello World'});
})



var server = http.createServer(app);
server.listen('3000');
