var functionvar =require('../../../../../../server.js');

exports.process_data=function(device_name){

const disable_check=require('../../../tempsensor/dao/sensornamecheck.js');

disable_check.findbyname_sensor_dao_fn(device_name.name , function(result){
  
  var x={
    value: result.data[0].mode
    }

 if(x.value=='enable'){
    const temphistory_dao = require('../dao/temphistory_dao.js');
    temphistory_dao.tempsensor_dao_fn(device_name, function(result){

      console.log(result)
    })
  }
 else{
  console.log("device in disable mode");
}
  })


}
