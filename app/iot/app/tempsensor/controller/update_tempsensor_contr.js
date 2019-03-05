
exports.update_tempsensor_contr_fn = function(req, res){

  const updatetempsensorDao = require('../dao/update_tempsensor_dao.js');
  updatetempsensorDao.update_tempsensor_dao_fn(req.body, function(result){
    res.send(result);
  })
};
