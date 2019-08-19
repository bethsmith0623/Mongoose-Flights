const express = require('express');
const app = express();
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const flightsRouter = require('./routes/flights');
const indexRouter = require('./routes/index');
const ticketsRouter = require('./routes/tickets');
const port = 3000;

require('./config/mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', ticketsRouter);

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
