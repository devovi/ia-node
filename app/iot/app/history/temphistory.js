var functionvar =require('../../../../server.js');

exports.process_data=function(device_name){
  console.log('in temp sensor=='+device_name.name);
  // let data_parse=JSON.parse(device_status.msg);
  // var i ='';
  //  for(i in data_parse.data){
  // console.log('new data array'+data_parse.data[i].category);
  // console.log(data_parse.data[i].name);
  // console.log(data_parse.data[i].state);

  // let newt='?ledname=led5'
//  let jsondata=JSON.stringify(tofun.msg.toString());
// const disable_check=require('../ledmaster/dao/checkexists_led_dao.js');
const disable_check=require('../tempsensor/dao/sensornamecheck.js');

disable_check.findbyname_sensor_dao_fn(device_name.name , function(result){
  console.log('********----in tempmaster model----=========');
  console.log(result);
  console.log('********----in tempmaster model end----=========');

  var x={
    value: result.data[0].able
    // console.log(x);
  }
  console.log(x);


// })

  // let data_parse=JSON.parse(device_status.msg);
  // console.log(data_parse.name);
  if(x.value=='enable'){
  require('./temphistory_model.js').model('temphistory')
  ({
    tempname:device_name.name,
    mintemp:device_name.state
  })
  .save(function(err, data){
    if(!err){
      console.log(data);
    }
    else {
      console.log(err);
    }
  });
}
else{
  console.log("device in disable mode");
}
  })


}
