
exports.findall_floor_contr_fn = function(req, res){

  const findAllfloor_dao = require('../dao/findall_floor_dao.js');
  findAllfloor_dao.findall_floor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
