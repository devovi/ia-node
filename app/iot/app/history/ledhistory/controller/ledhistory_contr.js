var functionvar =require('../../../../../../server.js');

exports.process_data=function(device_name){

const disable_check=require('../../../ledmaster/dao/namecheck.js');

disable_check.findbyname_led_dao_fn(device_name.name , function(result){

  var x={
    value: result.data[0].mode
  }

  if(x.value=='enable'){
    const ledhistory_dao = require('../dao/ledhistory_dao.js');
    ledhistory_dao.ledhistory_dao_fn(device_name, function(result){

      console.log(result)
    })

  }
else{
  console.log("device in disable mode");
}
  })

}
