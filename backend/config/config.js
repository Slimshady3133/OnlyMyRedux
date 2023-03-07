const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: '*',
  credential: true,
};

const serverConfig = (app) => {
  app.use(cors(corsOptions));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.disable('x-powered-by');
};

module.exports = serverConfig;
