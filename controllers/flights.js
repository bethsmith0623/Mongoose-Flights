const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show, 
  update
};

function update (req,res) {
  
};

function index(req, res){
  Flight.find({}, function(err, flights){
    res.render('flights/index', {title: 'All Flights', flights});
  });
};

function newFlight(req,res) {
  res.render('flights/new', {title: 'Add Flight'});
}

function create (req,res){
  //Corrects an empty date if one is not entered
  for(let key in req.body){
    req.body[key]=== '' && delete req.body[key];
  }
  //creates new flight
  Flight.create(req.body, function(err, flight){
    console.log(flight);
    res.redirect('/flights');
  })
};

function show(req,res){
  //1)Query the database for a single flight
  //2) We need to call res.render and render a show.ejs template
  Flight.findById(req.params.id)
  .populate('flight').exec(function(err, flight){
    res.render('flights/show', {title: 'Flight Detail', flight});
  });

};