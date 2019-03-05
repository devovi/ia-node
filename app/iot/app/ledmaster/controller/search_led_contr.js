
exports.search_led_contr_fn = function(req, res){

  const searchledDao = require('../dao/search_led_dao.js');
  searchledDao.search_led_dao_fn(req.query, function(result){
    res.send(result);
  })
};
