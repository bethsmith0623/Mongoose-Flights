const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA']
  },
  arrival: {
    type: Date, 
    default: function(){
        // 08/16/2019 22:20 CDT convert to 08/19/2020 22:20 CDT
        const date = new Date();
        const updatedYear = date.getFullYear() + 1;
        date.setFullYear(updatedYear);
        return date + 1;
      }
    }, 
  }, { timestamps: true });

  module.exports = mongoose.model('Destination', destinationSchema);