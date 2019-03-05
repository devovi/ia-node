
exports.findbyid_building_contr_fn = function(req, res){

  const findbyidbuildingDao = require('../dao/findbyid_building_dao.js');
  findbyidbuildingDao.findbyid_building_dao_fn(req.query, function(result){
    res.send(result);
  })
};
