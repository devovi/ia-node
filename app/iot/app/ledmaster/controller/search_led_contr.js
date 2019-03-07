
exports.search_led_contr_fn = function(req, res){

  const searchledbf = require('../bfs/search_led_bf.js');
  searchledbf.search_led_bf_fn(req.query, function(result){
    res.send(result);
  })
};
