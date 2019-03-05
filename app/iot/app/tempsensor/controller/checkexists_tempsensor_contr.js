exports.checkexists_tempsensor_contr_fn = function(req, res){

  const checkexiststempsensorDao = require('../dao/checkexists_tempsensor_dao.js');
  checkexiststempsensorDao.checkexists_tempsensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
