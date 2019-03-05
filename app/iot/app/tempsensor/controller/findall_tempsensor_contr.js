
exports.findall_tempsensor_contr_fn = function(req, res){

  const findAlltempsensorDao = require('../dao/findall_tempsensor_dao.js');
  findAlltempsensorDao.findall_tempsensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
