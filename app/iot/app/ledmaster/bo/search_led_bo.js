exports.search_led_bo_fn = function(req,result){
  // console.log("bo file");
  const search_led_dao = require('../dao/search_led_dao.js');
  search_led_dao.search_led_dao_fn(req,function(daoResult){
    result(daoResult);
  });
};
