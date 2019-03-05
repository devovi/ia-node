
exports.search_tempsensor_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/tempsensor_model.js')
  .model('tempsensor')
  .find({name: new RegExp(req.name+'+', "i")}, function(err, data) {
    if(!err){
      result(data);
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });
}
