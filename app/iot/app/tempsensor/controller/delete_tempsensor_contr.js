
exports.delete_tempsensor_contr_fn = function(req, res){

  const deletetempsensorDao = require('../dao/delete_tempsensor_dao.js');
  deletetempsensorDao.delete_tempsensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
