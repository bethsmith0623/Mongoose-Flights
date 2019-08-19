const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
  new: newTicket, 
  create
};

function newTicket(req,res) {
  //1) query database for single flight by id
  //2) call res.render and render a template with a flight id and new ticket form
  Flight.findById(req.params.id, function(err, flight){
  res.render('tickets/new', {flight});
  })
};

function create (req,res){
  //1) Query the db for the flight
  //2) then we need to create a ticket
  //3) then we can push the id of the flight to the flights property of the ticket
  //4) call res.redirect to the show route of the flight /flights/:id
  Flight.findById(req.params.id, function(err, flight){
    Ticket.create(req.body, function(err, ticket){
      ticket.flights.push(flight._id);
      ticket.save(function(err, ticket){
        res.redirect(`/flights/${flight._id}`);
      });
    });
  });
};