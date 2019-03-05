
exports.update_led_contr_fn = function(req, res){

  const updateledDao = require('../dao/update_led_dao.js');
  updateledDao.update_led_dao_fn(req.body, function(result){
    res.send(result);
  })
};
