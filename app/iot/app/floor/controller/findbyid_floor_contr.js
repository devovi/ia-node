
exports.findbyid_floor_contr_fn = function(req, res){

  const findbyidfloorDao = require('../dao/findbyid_floor_dao.js');
  findbyidfloorDao.findbyid_floor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
