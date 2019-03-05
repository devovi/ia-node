
exports.delete_led_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/led_model.js').model('led').findById({_id: req.id}, function (err, data) {

    if(!err){

      data.set({
        deleted: req.deleted,
        updatedBy: req.updatedby
      });
      data.save(function (err1, data1) {

        if(!err1){
          result(data1);
        }
        else {
          console.error(colors.red(err1));
          result(err1);
        }
      });
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });
}
