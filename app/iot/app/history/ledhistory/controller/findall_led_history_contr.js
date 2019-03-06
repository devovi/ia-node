
exports.findall_led_history_contr_fn = function(req, res){
  console.log('controller ');
  const findAllledhistoryDao = require('../dao/findall_led_history_dao.js');
  findAllledhistoryDao.findall_led_history_dao_fn(req.query, function(result){
    res.send(result);
  })
};
