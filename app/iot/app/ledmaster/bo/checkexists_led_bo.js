exports.checkexists_led_bo_fn = function(req,result){
  // console.log("bo file");
  const checkexists_led_dao = require('../dao/checkexists_led_dao.js');
  checkexists_led_dao.checkexists_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
