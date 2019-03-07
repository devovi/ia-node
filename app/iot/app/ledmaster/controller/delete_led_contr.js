
exports.delete_led_contr_fn = function(req, res){

  const deleteledbf = require('../bfs/delete_led_bf.js');
  deleteledbf.delete_led_bf_fn(req.query, function(result){
    res.send(result);
  })
};
