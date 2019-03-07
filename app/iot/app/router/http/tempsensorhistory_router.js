historyRouter=function(app){

    const colors = require('colors');

  app.route('/temphistory/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAlltemphistoryController=require('../../history/tempsensorhistory/controller/findall_temp_history_contr.js');
    findAlltemphistoryController.findall_temp_history_contr_fn(req, res);
  });

}
module.exports=historyRouter;
