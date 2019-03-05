
exports.delete_led_contr_fn = function(req, res){

  const deleteledDao = require('../dao/delete_led_dao.js');
  deleteledDao.delete_led_dao_fn(req.query, function(result){
    res.send(result);
  })
};
