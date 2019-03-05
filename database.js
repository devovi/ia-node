databaseConnection = function(mongoose, DBENV, result){
  const colors = require('colors');
  const fileSystem  = require('fs');

  var dbObject  = DBENV.parsed.PROTOCOL+
                  "://"+DBENV.parsed.DATABASE_HOST+
                  ":"+DBENV.parsed.DATABASE_PORT+
                  "/"+DBENV.parsed.DATABASE;
  console.log(colors.yellow("Trying to connect "+dbObject+""));

  mongoose.connect(dbObject, { useNewUrlParser: true }, function(databaseConnectionError, db) {
    if (!databaseConnectionError) {
      result({"status":"Database Connected!","db":dbObject});
    }
    else {
      result(databaseConnectionError);
    }
  });
}
module.exports = databaseConnection;
