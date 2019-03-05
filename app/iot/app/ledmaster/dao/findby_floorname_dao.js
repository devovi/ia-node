exports.findby_floorname_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/led_model.js')
  .model('led')
  .paginate({floor:req.floor}, { page: (parseInt(req.page) || 1), limit: (parseInt(req.limit) || 10) }, function(err, data) {

    if(!err){
      var resultData;
      resultData = {
        "data" : data["docs"],
        "total" : data["total"],
        "limit" : data["limit"],
        "page" : data["page"],
        "pages" : data["pages"]
      }
      result(resultData);
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });
}
