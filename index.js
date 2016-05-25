var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
/*
app.get('/', function(request, response) {
  response.render('pages/index')
});*/

/*
app.get('/cool', function(request, response) {
  response.send(cool());
});*/

var DB = require('mongodb').Db,
    DB_Connection = require('mongodb').Connection,
    DB_Server = require('mongodb').Server,
    async = require('async') ;

var MongoClient = require('mongodb').MongoClient;
 var url1 = "mongodb://52.24.136.109:27017/test?w=0&readPreference=secondary";

 var url2 = "mongodb://52.35.94.222:27017/test?w=0&readPreference=secondary";
 var url3 = "mongodb://52.33.102.9:27017/test?w=0&readPreference=secondary";



app.get('/server2', function(request, response) {
MongoClient.connect(url2, function(err, db) {
db.collection('cmpe281', function(err, collection) {

        collection.find( {key: "1"}).toArray( function(err, results) {

        	  response.setHeader("Content-Type", "text/html");	
              response.end("SERVER 2:"+results[0].value);
           //   output += "SERVER 2:"+results[0].value;

        } ) ;

    
});
});
});


app.get('/server3', function(request, response) {
MongoClient.connect(url3, function(err, db) {
db.collection('cmpe281', function(err, collection) {

        collection.find( {key: "1"}).toArray( function(err, results) {

        	  response.setHeader("Content-Type", "text/html");	
              response.end("SERVER 3:"+results[0].value);
           //   output += "SERVER 2:"+results[0].value;

        } ) ;

    
});
});
});


app.get('/server1', function(request, response) {
 
 
//var output = " ";
  //response.send("Hello World");
MongoClient.connect(url1, function(err, db) {
db.collection('cmpe281', function(err, collection) {

        collection.find( {key: "1"}).toArray( function(err, results) {

        	  response.setHeader("Content-Type", "text/html");	
              response.end("SERVER 1:"+results[0].value);

              //output = "SERVER 1:"+results[0].value;

        } ) ;

    
});
});
});



//
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
