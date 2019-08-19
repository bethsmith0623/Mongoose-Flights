// const Destination = require('../models/destination');
// const Flight = require('../models/flight');


// module.exports = {
//   new: newDestination, 
//   create
// };

// function newDestination(req,res) {
//   //1) query database for single flight by id
//   //2) call res.render and render a template with a flight id and new ticket form
//   Flight.findById(req.params.id, function(err, flight){
//   res.render(`/flights/${flight._id}`, {flight});
//   })
// };

// function create (req,res){
//   Flight.findById(req.params.id, function(err, flight) {
//     Destination.create(req.body, function(err, destination){
//       destination.flights.push(flight._id);
//       destination.save(function(err, destination) {
//         res.redirect(`/flights/${flight._id}`);
//       });
//     });
//   });
// };