
exports.findbyid_tempsensor_contr_fn = function(req, res){

  const findbyidtempsensorDao = require('../dao/findbyid_tempsensor_dao.js');
  findbyidtempsensorDao.findbyid_tempsensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
