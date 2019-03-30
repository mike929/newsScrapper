
//require mongoose module
var mongoose = require('mongoose');

//require chalk module to give colors to console text
var chalk = require('chalk');

//require database URL from process.env file
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";


var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;


//export this function and imported by server.js
module.exports =function(){

    mongoose.connect(MONGODB_URI);
    // mongodb://heroku_bjk8xf40:9uumveatdql83t47m9jv1dghed@ds227146.mlab.com:27146/heroku_bjk8xf40

    mongoose.connection.on('connected', function(){
        console.log(connected("Mongoose default connection is open to ", MONGODB_URI));
    });

    mongoose.connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"));
    });

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });
}