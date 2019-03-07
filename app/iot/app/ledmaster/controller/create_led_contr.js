
exports.create_led_contr_fn = function(req, res){

  const createledbf = require('../bfs/create_led_bf.js');
  console.log(req.body);
  createledbf.create_led_bf_fn(req.body, function(result){
    res.send(result);
  })
};
