const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  airportDep: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA']
  },
  airportArr: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA']
  },
}, { timestamps: true });

module.exports = mongoose.model('Flight', flightSchema);
