const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const destinationSchema = require('../models/destination');

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date, 
    default: function(){
      // 08/16/2019 22:20 CDT convert to 08/19/2020 22:20 CDT
      const date = new Date();
      const updatedYear = date.getFullYear() + 1;
      date.setFullYear(updatedYear);
      return date;
    }
  },
  airport: {
    type: String,
    enum: ['SEA', 'DAL', 'LAX', 'AUS'],
    default: 'SEA'
  },
  destinations: [{type: Schema.Types.ObjectId, ref: 'Destination'}]
  ,
}, { timestamps: true });

module.exports = mongoose.model('Flight', flightSchema);
