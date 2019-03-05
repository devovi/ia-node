exports.findbyfloorname_contr_fn = function(req, res){

  const findbyfloornameDao = require('../dao/findby_floorname_dao.js');
  findbyfloornameDao.findby_floorname_dao_fn(req.query, function(result){
    res.send(result);
  })
};
