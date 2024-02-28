const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require("../router/router")



const app = express();


app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);



  
  module.exports = app;