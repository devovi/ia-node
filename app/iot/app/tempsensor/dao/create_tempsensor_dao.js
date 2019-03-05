
exports.create_tempsensor_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/tempsensor_model.js').model('tempsensor')
  ({
    tempname: req.tempname,
    mintemp: req.mintemp,
    maxtemp: req.maxtemp,
    able:req.able


  })
  .save(function(err, data){

    if(!err){
      result(data);
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });
}
