
exports.findbyid_devicelist_contr_fn = function(req, res){

  const findbyiddevicelistDao = require('../dao/findbyid_devicelist_dao.js');
  findbyiddevicelistDao.findbyid_devicelist_dao_fn(req.query, function(result){
    res.send(result);
  })
};
