
exports.findall_led_bo_fn = function(req,result){
  // console.log("bo file");
  const findall_led_dao = require('../dao/findall_led_dao.js');
  findall_led_dao.findall_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
