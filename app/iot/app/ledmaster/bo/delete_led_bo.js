exports.delete_led_bo_fn = function(req,result){
  // console.log("bo file");
  const delete_led_dao = require('../dao/delete_led_dao.js');
  delete_led_dao.delete_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
