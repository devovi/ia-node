devicelistRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************




  // Fetches all data of collections
  app.route('/devicelist/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAlldevicelistController=require('../../devicelist/controller/findall_devicelist_contr.js');
    findAlldevicelistController.findall_devicelist_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/devicelist/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDdevicelistController=require('../../devicelist/controller/findbyid_devicelist_contr.js');
    findByIDdevicelistController.findbyid_devicelist_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = devicelistRouter;
