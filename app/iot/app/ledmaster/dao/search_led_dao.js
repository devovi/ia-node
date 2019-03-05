
exports.search_led_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/led_model.js')
  .model('led')
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
