
exports.checkexists_led_dao_fn = function(req, result){
  console.log('called by history');
console.log('========'+req);
  query={ledname:'req'}
  const colors = require('colors');

  require('../model/led_model.js')
  .model('led')
  .find({
        ledname: new RegExp('^'+req.ledname+'$', "i"),
        // ledname: new RegExp('^'+req.name+'$', "i"),

  }, function(err, data) {
    if(!err){
      result(data);
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });
}
