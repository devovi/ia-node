
exports.findall_building_contr_fn = function(req, res){

  const findAllbuilding_dao = require('../dao/findall_building_dao.js');
  findAllbuilding_dao.findall_building_dao_fn(req.query, function(result){
    res.send(result);
  })
};
