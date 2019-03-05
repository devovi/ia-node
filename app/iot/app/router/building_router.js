buildingRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************




  // Fetches all data of collections
  app.route('/building/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAlldevicelistController=require('../building/controller/findall_building_contr.js');
    findAlldevicelistController.findall_building_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/building/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDdevicelistController=require('../building/controller/findbyid_building_contr.js');
    findByIDdevicelistController.findbyid_building_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = buildingRouter;
