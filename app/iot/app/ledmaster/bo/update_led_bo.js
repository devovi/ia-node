exports.update_led_bo_fn = function(req,result){
  // console.log("bo file");
  const update_led_dao = require('../dao/update_led_dao.js');
  update_led_dao.update_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
