
exports.checkexists_led_contr_fn = function(req, res){

  const checkexistsledbf = require('../bfs/checkexists_led_bf.js');
  checkexistsledbf.checkexists_led_bf_fn(req.query, function(result){
    res.send(result);
  })
};
