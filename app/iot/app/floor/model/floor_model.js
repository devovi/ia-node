const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const floor = mongoose.Schema({

  buildingid: { type: String, required: true },
  floorname:{type:String},
  description:{ type: String}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
floor.plugin(mongoosePaginate);

module.exports = mongoose.model('floor', floor);
