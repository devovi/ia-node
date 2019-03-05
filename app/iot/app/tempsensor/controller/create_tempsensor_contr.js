exports.create_tempsensor_contr_fn = function(req, res){

  const createtempsensorDao = require('../dao/create_tempsensor_dao.js');
  createtempsensorDao.create_tempsensor_dao_fn(req.body, function(result){
    res.send(result);
  })
};
