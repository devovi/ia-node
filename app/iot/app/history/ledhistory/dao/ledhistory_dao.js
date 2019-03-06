
exports.ledhistory_dao_fn = function(device_name, result){


  const colors = require('colors');

  require('../model/ledhistory_model.js').model('ledhistory')
  ({
    ledname:device_name.name,
    currentstatus:device_name.state
  })
  .save(function(err, data){
    if(!err){
      console.log(data);
      result(data);
    }
    else {
      console.log(err);
    }
  });


}
