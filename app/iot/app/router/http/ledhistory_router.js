historyRouter=function(app){

    const colors = require('colors');

  app.route('/ledhistory/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllledhistoryController=require('../../history/ledhistory/controller/findall_led_history_contr.js');
    findAllledhistoryController.findall_led_history_contr_fn(req, res);
  });

}
module.exports=historyRouter;
