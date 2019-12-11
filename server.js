var logger = require('logger').createLogger('logs/logs.log');
var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var app = express();

const mongourl = 'mongodb+srv://testuser:testuser@testcluster-kq3hz.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'testdb';

app.get('/', function (req, res) {
	var ip = req.connection.remoteAddress;
	ip = ip.split(':')[3];
	logger.info("user :  " + ip);
	res.send("Hello DevOps !");
});






app.get('/check/connection', function (req, res) {
	var ip = req.connection.remoteAddress;
	ip = ip.split(':')[3];
	logger.info("user :  " + ip);
	MongoClient.connect(mongourl, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        res.send("Connected successfully to server !");
        const db = client.db(dbName);
      });
});


app.get('/insert/testdoc', function (req, res) {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       
        const db = client.db(dbName);
       
        insertDocuments(db, function() {
          client.close();
        });
      });
});

app.get('/find/alldoc', function (req, res) {
	var ip = req.connection.remoteAddress;
	ip = ip.split(':')[3];
    logger.info("user :  " + ip);
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       
        const db = client.db(dbName);
       
        const findDocuments = function(db, callback) {
            // Get the documents collection
            const collection = db.collection('documents');
            // Find some documents
            collection.find({}).toArray(function(err, docs) {
              assert.equal(err, null);
              console.log("Found the following records");
              console.log(docs)
              callback(docs);
            });
          } 
         });
});

app.listen(9000, function () {
	console.log("server started on port no. 9000");
	logger.info("server started on port no. ");
});
