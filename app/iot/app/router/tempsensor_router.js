

tempsensorRouter = function(app){

  const colors = require('colors');

  app.route('/tempsensor/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createtempsensorController=require('../tempsensor/controller/create_tempsensor_contr.js');
    createtempsensorController.create_tempsensor_contr_fn(req, res);
  });

  // Fetches matching (case insensitive) data from collections
  app.route('/tempsensor/checkexists')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const checkExiststempsensorController =require('../tempsensor/controller/checkexists_tempsensor_contr.js');
    checkExiststempsensorController.checkexists_tempsensor_contr_fn(req, res);
  });

  app.route('/tempsensor/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deletetempsensorController=require('../tempsensor/controller/delete_tempsensor_contr.js');
    deletetempsensorController.delete_tempsensor_contr_fn(req, res);
  });

  // Fetches all data of collections
  app.route('/tempsensor/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
      const findAlltempsensorController=require('../tempsensor/controller/findall_tempsensor_contr.js');
    findAlltempsensorController.findall_tempsensor_contr_fn(req, res);
  });

  // Fetches data from collections by given ID
  app.route('/tempsensor/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDtempsensorController =require('../tempsensor/controller/findbyid_tempsensor_contr.js');
    findByIDtempsensorController.findbyid_tempsensor_contr_fn(req, res);
  });

  // Fetches matching characters data from collections
  app.route('/tempsensor/search')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const searchtempsensorController=require('../tempsensor/controller/search_tempsensor_contr.js');
    searchtempsensorController.search_tempsensor_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/tempsensor/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updatetempsensorController=require('../tempsensor/controller/update_tempsensor_contr.js');
    updatetempsensorController.update_tempsensor_contr_fn(req, res);
  });

  app.route('/tempsensor/find')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findtempsensorController=require('../tempsensor/controller/find_tempsensor_contr.js');
    findtempsensorController.find_tempsensor_contr_fn(req, res);
  });

  app.route('/test/create')
  .post(function(req, res){

    console.log(req.body);
    // console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    //
    // const findtempsensorController=require('../tempsensor/controller/find_tempsensor_contr.js');
    // findtempsensorController.find_tempsensor_contr_fn(req, res);
  });

}

module.exports = tempsensorRouter;
