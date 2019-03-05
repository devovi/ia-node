const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fileSystem  = require('fs');
const mongoose  = require('mongoose');
const colors = require('colors');
const cors = require('cors');
// var led_router = require('./app/iot/app/ledhistory/ledhistory.js')
var mqtt_router = require('./app/iot/app/history/mqttrouter.js')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
////////////////////

const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')
///////////////////
var state = 'off'
var mqtt_data_routers = ''

// console.log('>>>>>>>>>>>>'+client.stream.remoteAddress);



client.on('connect', () => {
  client.subscribe('device/state')

  // Inform controllers that led is connected
  // client.publish('device/connected', 'true')
  console.log('+++++++++++++++++++++++++')
  console.log('Below Topics are subscribed')
  console.log('1.device/state')
  console.log('+++++++++++++++++++++++++')

})


  client.on('message', (topic,message,packet) => {
  console.log('received message %s, %s  ', topic,message)


  let device_status={
    topic:topic,
    msg:message,
    client:client
  }

  switch(topic)
  {
    case "device/state":
    mqtt_data_routers = mqtt_router

  }

  console.log(device_status.topic);
  mqtt_data_routers.router_data(device_status)

})


// function sendStateUpdate () {
//   console.log('sending state %s', state)
//   client.publish('device/state', state)
// }


var serverPortFilePath;
if(process.env.NODE_ENV=="production"){
  serverPortFilePath="prod.env";
}
else if (process.env.NODE_ENV=="staging") {
  serverPortFilePath="stag.env";
}
else if (process.env.NODE_ENV=="development") {
  serverPortFilePath="dev.env";
}
else if (process.env.NODE_ENV=="predevelopment") {
  serverPortFilePath="predev.env";
}
else if (process.env.NODE_ENV=="qualityanalysis") {
  serverPortFilePath="qa.env";
}
else if (process.env.NODE_ENV=="local") {
  serverPortFilePath="local.env";
}
else {
  serverPortFilePath="local.env";
}
console.log(serverPortFilePath);

const serverPortFile = require('dotenv').config({path: './app/environments/'+serverPortFilePath});
// delete process.env.SERVER_PORT;

fileSystem.readFile('./app/config/server_config.json','utf8',function(serverConfigError,serverConfigData){
  if (!serverConfigError) {

    var serverConfigDataObjects = JSON.parse(serverConfigData);

    if(serverConfigDataObjects.enableCORS==1){
      app.use(cors());
      console.log(colors.green("CORS enabled!"));
    }
    else {
      console.log(colors.yellow("CORS not enabled!"));
    }

    const server  = app.listen(serverPortFile.parsed.SERVER_PORT, function(serverStartError){

      var port = server.address().port;

      if (!serverStartError) {

        console.log(colors.bgGreen(colors.black("Listening at port %s")), port);
        console.log(colors.bgBlue("Running application in "+serverPortFile.parsed.MODE+" mode"));

        const databaseConnection = require(serverConfigDataObjects.databaseFilePath);

        databaseConnection(mongoose, serverPortFile, function(databaseConnectionStatus){
          if (databaseConnectionStatus.status=="Database Connected!") {
            console.log(colors.bgGreen(colors.black("Database connected at "+databaseConnectionStatus.db)));
            const routers = require(serverConfigDataObjects.routersFilePath);
            routers(app);
          }
          else {
            console.error(databaseConnectionStatus);
          }
        });
      }
      else {
        console.error(serverStartError);
      }
    });
  }
  else {
    console.error(serverConfigError);
  }
});

module.exports = app; // for testing
