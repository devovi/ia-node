exports.find_led_contr_fn = function(req, res){

  const findledbf = require('../bfs/find_led_bf.js');
  findledbf.find_led_bf_fn(req.query, function(result){
    res.send(result);
  })
};
