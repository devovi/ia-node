floorRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************


  // Fetches all data of collections
  app.route('/floor/findall')
  .get(function(req, res){
    console.log("in router");
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllfloorController=require('../../floor/controller/findall_floor_contr.js');
    findAllfloorController.findall_floor_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/floor/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDfloorController=require('../../floor/controller/findbyid_floor_contr.js');
    findByIDfloorController.findbyid_floor_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = floorRouter;
