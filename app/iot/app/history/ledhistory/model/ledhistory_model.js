const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ledhistory = mongoose.Schema({
  ledname: { type: String, required: true },
  currentstatus: {type: Boolean},
},
{ timestamps:
  {
    createdAt: 'createdAt'
  }
});
ledhistory.plugin(mongoosePaginate);

module.exports = mongoose.model('ledhistory', ledhistory);
