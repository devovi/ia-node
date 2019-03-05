
exports.findall_led_contr_fn = function(req, res){

  const findAllled_bf = require('../bfs/findall_led_bf.js');
  findAllled_bf.findall_led_bf_fn(req.query, function(result){
    res.send(result);
  })
};
