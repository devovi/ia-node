exports.create_led_bo_fn = function(req,result){
  // console.log("bo file");
  const create_led_dao = require('../dao/create_led_dao.js');
  create_led_dao.create_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
