
const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const tempsensor = mongoose.Schema({
  tempname: { type: String, required: true },
  mintemp: {type: String,  required: true},
  maxtemp: {type: String,  required: true},
  deleted : {type: Boolean, default: false},
  able:{type:String}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
tempsensor.plugin(mongoosePaginate);

module.exports = mongoose.model('tempsensor', tempsensor);
