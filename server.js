const express = require('express');
const app = express();
const path = require('path');
const flightsRouter = require('./routes/flights');
const indexRouter = require('./routes/index');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/flights', flightsRouter);

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
