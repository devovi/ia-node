
exports.create_led_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/led_model.js').model('led')
  ({
    ledname: req.ledname,
    color: req.color,
    brightness: req.brightness,
    deleted :  req.deleted || false,
    currentstatus: req.currentstatus,
    buildingname:req.buildingname,
    floorno:req.floorno,
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
