/* 
 * @file app.js
 * @author Allen Day / ZEZHAO DAI
 * @student_id 301136181
 * @date sept/30/2021
 */

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var authRouter= require('./routes/auth');
var secureRouter= require('./routes/secure');

var app = express();
const PORT = process.env.PORT || 3000;

// connect to mongodb
const mongoose = require('mongoose');
const DB_URL = process.env.DB || 'mongodb://localhost:27017/comp229';
mongoose.connect(DB_URL)
    .then(() => console.log('Conntected to database'))
    .catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/login', authRouter);
app.use('/secure', secureRouter)
app.listen(PORT);
