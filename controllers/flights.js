const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show
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
  var flight = new Flight(req.body);
  flight.save(function(err){
   if (err) console.log(err);
    console.log(flight);
    res.redirect('/flights');
  })
};

function show(req,res){
  Flight.findById(req.params.id)
  .populate('flight').exec(function(err, flight){
    console.log(flight);
    res.render('flights/show', {title: 'Flight Detail', flight});
  });

};