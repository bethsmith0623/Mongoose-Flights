const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA']
  },
  arrival: {
    type: Date
    }, 
  }, { timestamps: true });

  module.exports = mongoose.model('Destination', destinationSchema);