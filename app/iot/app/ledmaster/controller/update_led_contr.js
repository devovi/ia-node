
exports.update_led_contr_fn = function(req, res){

  const updateledD = require('../bfs/update_led_bf.js');
  updateledDao.update_led_bf_fn(req.body, function(result){
    res.send(result);
  })
};
