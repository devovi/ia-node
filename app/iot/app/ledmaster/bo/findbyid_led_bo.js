exports.findbyid_led_bo_fn = function(req,result){
  // console.log("bo file");
  const findbyid_led_dao = require('../dao/findbyid_led_dao.js');
  findbyid_led_dao.findbyid_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
