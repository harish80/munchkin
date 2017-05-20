'use strict';

var express = require("express");
var path = require("path");

const app = require('./app');
const port = app.get('port');
const server = app.listen(process.env.PORT || port);

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);

