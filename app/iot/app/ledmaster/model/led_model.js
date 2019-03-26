const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const led = mongoose.Schema({

  ledname: { type: String, required: true },
  color: {type: String,  required: true},
  brightness: {type: String},
  buildingname: {type:String},
  deleted : {type: Boolean, default: false},
  currentstatus: {type: String},
  floorno:{type:String},
  deviceid:{type:String},
  mode:{type:String}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
led.plugin(mongoosePaginate);

module.exports = mongoose.model('led', led);
