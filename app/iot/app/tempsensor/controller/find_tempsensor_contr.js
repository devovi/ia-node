
exports.find_tempsensor_contr_fn = function(req, res){

  const findtempsensorDao = require('../dao/find_tempsensor_dao.js');
  findtempsensorDao.find_tempsensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
