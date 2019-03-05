
exports.checkexists_led_contr_fn = function(req, res){

  const checkexistsledDao = require('../dao/checkexists_led_dao.js');
  checkexistsledDao.checkexists_led_dao_fn(req.query, function(result){
    res.send(result);
  })
};
