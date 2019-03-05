
exports.findall_devicelist_contr_fn = function(req, res){

  const findAlldevicelist_dao = require('../dao/findall_devicelist_dao.js');
  findAlldevicelist_dao.findall_devicelist_dao_fn(req.query, function(result){
    res.send(result);
  })
};
