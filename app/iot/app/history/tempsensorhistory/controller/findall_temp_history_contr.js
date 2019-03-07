
exports.findall_temp_history_contr_fn = function(req, res){

  const findAlltemphistoryDao = require('../dao/findall_temp_history_dao.js');
  findAlltemphistoryDao.findall_temp_history_dao_fn(req.query, function(result){
    res.send(result);
  })
};
