
exports.create_led_contr_fn = function(req, res){

  const createledDao = require('../dao/create_led_dao.js');
  console.log(req.body);
  createledDao.create_led_dao_fn(req.body, function(result){
    res.send(result);
  })
};
