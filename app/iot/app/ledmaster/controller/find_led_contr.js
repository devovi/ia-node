exports.find_led_contr_fn = function(req, res){

  const findledDao = require('../dao/find_led_dao.js');
  findledDao.find_led_dao_fn(req.query, function(result){
    res.send(result);
  })
};
