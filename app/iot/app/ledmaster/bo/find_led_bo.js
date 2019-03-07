exports.find_led_bo_fn = function(req,result){
  // console.log("bo file");
  const find_led_dao = require('../dao/find_led_dao.js');
  find_led_dao.find_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
