const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

const loadtest = require('loadtest');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


var options = { 
	url: 'localhost:3000',
	maxSeconds: '2',
	concurrency: 30,
	requestsPerSecond: '20' };

app.post('/avalanche', function(req, res) {
	console.log(req.body)
  loadtest.loadTest(req.body, function(err, result) {
  	console.log('running test')
    if (err) {
      return console.error('Got an error', err);
    }
    console.log('Test has run successfully with results of:', result);
    res.send(result);
  });
})

var listener = app.listen(3001, function(){
  console.log('App is running on port 3001');
});
