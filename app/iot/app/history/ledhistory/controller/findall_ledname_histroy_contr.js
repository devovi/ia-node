exports.findallledname_contr_fn = function(req, res){

  const findalllednameDao = require('../dao/findall_ledname_dao.js');
  findalllednameDao.findall_ledname_dao_fn(req.query, function(result){
    res.send(result);
  })
};
