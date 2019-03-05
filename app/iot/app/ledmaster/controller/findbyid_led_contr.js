
exports.findbyid_led_contr_fn = function(req, res){

  const findbyidledDao = require('../dao/findbyid_led_dao.js');
  findbyidledDao.findbyid_led_dao_fn(req.query, function(result){
    res.send(result);
  })
};
