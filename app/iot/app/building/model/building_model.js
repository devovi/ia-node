const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const building = mongoose.Schema({

  buildingname: { type: String, required: true },
  address:{ type: String}


},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
building.plugin(mongoosePaginate);

module.exports = mongoose.model('building', building);
