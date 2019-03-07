var functionvar =require('../../../../../server.js');

exports.router_data=function(device_status){

  let data_parse=JSON.parse(device_status.msg);
  console.log('((((((ip))))))'+ data_parse.ip);
  console.log('(((((((buildingname))))))'+ data_parse.buildingname);
  console.log('(((((((((floor))))))))'+ data_parse.floor);


  var i ='';
   for(i in data_parse.data){

    var dev_data={
    category:data_parse.data[i].category,
    name:data_parse.data[i].name,
    state:data_parse.data[i].state
  }
  if(dev_data.category=='led'){
    const ledjs =require('../../history/ledhistory/controller/ledhistory_contr.js')
    ledjs.process_data(dev_data)
    device_status.client.publish('device/connect', 'acknowledge-'+dev_data.name +'connected')

  }
  else if(dev_data.category=='sensor'){
    const sensorjs=require('../../history/tempsensorhistory/controller/temphistory_contr.js')
    sensorjs.process_data(dev_data)
    device_status.client.publish('device/connect', 'acknowledge-'+dev_data.name + 'connected')

  }

}

}
