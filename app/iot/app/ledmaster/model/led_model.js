const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const led = mongoose.Schema({

  ledname: { type: String, required: true },
  color: {type: String,  required: true},
  brightness: {type: String},
  deleted : {type: Boolean, default: false},
  currentstatus: {type: String},
  buildingname:{type:String},
  floor:{type:Number},
  able:{type:String}
  // on: { type: String},
  // off: { type: String}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
led.plugin(mongoosePaginate);

module.exports = mongoose.model('led', led);
