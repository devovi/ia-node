
exports.findbyid_led_contr_fn = function(req, res){

  const findbyidledbf = require('../bfs/findbyid_led_bf.js');
  findbyidledbf.findbyid_led_bf_fn(req.query, function(result){
    res.send(result);
  })
};
