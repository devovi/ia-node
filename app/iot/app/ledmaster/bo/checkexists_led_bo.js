exports.checkexists_led_bo_fn = function(req,result){
  // console.log("bo file");
  const checkexists_led_dao = require('../dao/findall_led_dao.js');
  checkexists_led_dao.findall_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
