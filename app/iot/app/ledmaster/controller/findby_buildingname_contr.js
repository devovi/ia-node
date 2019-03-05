
exports.findbybuildingname_contr_fn = function(req, res){

  const findbybuildingnameDao = require('../dao/findby_buildingname_dao.js');
  findbybuildingnameDao.findby_buildingname_dao_fn(req.query, function(result){
    res.send(result);
  })
};
