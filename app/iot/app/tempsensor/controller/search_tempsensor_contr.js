
exports.search_tempsensor_contr_fn = function(req, res){

  const searchtempsensorDao = require('../dao/search_tempsensor_dao.js');
  searchtempsensorDao.search_tempsensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
