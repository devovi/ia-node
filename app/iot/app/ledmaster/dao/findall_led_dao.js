
exports.findall_led_dao_fn = function(req, result){

  var currentdate=Date();
  const colors = require('colors');

   require('../model/led_model.js')
  .model('led')
   // .paginate({startDate:{'$lte':currentdate},endDate:{'$gte':currentdate},deleted: false}, { page: (parseInt(req.page) || 1), limit: 1000 }, function(err, data) {

   .paginate( req.deleted ? {deleted: req.deleted } : {},
          { page: (parseInt(req.page) || 1), limit: (parseInt(req.limit) || 1000000) }, function(err, data) {

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
