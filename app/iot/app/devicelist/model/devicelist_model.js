const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const devicelist = mongoose.Schema({

  name: { type: String, required: true },
  deleted:{type:Boolean}


},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
devicelist.plugin(mongoosePaginate);

module.exports = mongoose.model('devicelist', devicelist);
