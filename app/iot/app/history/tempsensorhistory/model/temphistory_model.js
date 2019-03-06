const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const temphistory = mongoose.Schema({
  tempname: { type: String, required: true },
  tempvalue: {type: String},
},
{ timestamps:
  {
    createdAt: 'createdAt'
  }
});
temphistory.plugin(mongoosePaginate);

module.exports = mongoose.model('temphistory', temphistory);
