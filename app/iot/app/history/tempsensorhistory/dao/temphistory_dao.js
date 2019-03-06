
exports.tempsensor_dao_fn = function(device_name, result){


  const colors = require('colors');

  require('../model/temphistory_model.js').model('temphistory')

  ({
    tempname:device_name.name,
    tempvalue:device_name.state
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
