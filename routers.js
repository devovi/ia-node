module.exports = function (app) {
  const fileSystem  = require('fs');
  const colors = require('colors');

  fileSystem.readFile('./app/config/router_config.json','utf8',function(routersConfigError, routersConfigData){

    var routersConfigDataObjects=JSON.parse(routersConfigData);
    var keys=Object.keys(routersConfigDataObjects);

    keys.forEach(function(key) {
      if(routersConfigDataObjects[key]['switch']==1){
        require(routersConfigDataObjects[key]['filePath'])(app);
        console.log(colors.green(routersConfigDataObjects[key]['name']+" running..."));
      }
      else {
        console.log(colors.yellow(routersConfigDataObjects[key]['name']+" skipped!"));
      }
    })
  });
};
