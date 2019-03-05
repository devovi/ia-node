
exports.find_led_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/led_model.js')
  .model('led')
  // .paginate({startDate:{'$lte':currentdate},endDate:{'$gte':currentdate},deleted: false}, { page: (parseInt(req.page) || 1), limit: 1000000 }, function(err, data) {
  .paginate({}, { page: (parseInt(req.page) || 1),
                  limit: (parseInt(req.limit) || 10),
                  sort:{[req.tosort || "createdAt"]: (req.sort || "desc")},
                  select: (req.select || []),
                }, function(err, data) {

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
