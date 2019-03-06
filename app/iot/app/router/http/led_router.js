ledRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************

  // Inserts given collection data
  app.route('/led/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createledController=require('../../ledmaster/controller/create_led_contr.js');
    createledController.create_led_contr_fn(req, res);
  });

  // Fetches matching (case insensitive) data from collections
  app.route('/led/checkexists')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const checkExistsledController=require('../../ledmaster/controller/checkexists_led_contr.js');
    checkExistsledController.checkexists_led_contr_fn(req, res);
  });

  // Updates collections deleted data by given ID
  app.route('/led/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deleteledController=require('../../led/controller/delete_led_contr.js');
    deleteledController.delete_led_contr_fn(req, res);
  });

  // Fetches all data of collections
  app.route('/led/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllledController=require('../../ledmaster/controller/findall_led_contr.js');
    findAllledController.findall_led_contr_fn(req, res);
  });

  // Fetches data from collections by given ID
  app.route('/led/find')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findledController=require('../../ledmaster/controller/find_led_contr.js');
    findledController.find_led_contr_fn(req, res);
  });

  // Fetches data from collections by given ID
  app.route('/led/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDledController=require('../../led/controller/findbyid_led_contr.js');
    findByIDledController.findbyid_led_contr_fn(req, res);
  });

  // Fetches matching characters data from collections
  app.route('/led/search')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const searchledController=require('../../led/controller/search_led_contr.js');
    searchledController.search_led_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/led/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updateledController=require('../../led/controller/update_led_contr.js');
    updateledController.update_led_contr_fn(req, res);
  });

  ////////////////////////

 app.route('/ledmaster/findbybuildingname')
 .get(function(req, res){
   console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

   const findbuildingnameController=require('../../ledmaster/controller/findby_buildingname_contr.js');
   findbuildingnameController.findbybuildingname_contr_fn(req, res);
 });
 ///////////
 app.route('/ledmaster/findbyfloorname')
 .get(function(req, res){
   console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

   const findfloornameController=require('../../ledmaster/controller/findby_floorname_contr.js');
   findfloornameController.findbyfloorname_contr_fn(req, res);
 });
 //////////////




///////////////////////////////////////////////////////////
}

module.exports = ledRouter;
