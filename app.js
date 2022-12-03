const express = require('express');
const path = require('path');
const zmq = require("zeromq");
const uuid = require('node-uuid');
// const bootstrap = require('bootstrap');
const app = express()
const port = 3000
var tick_count = 1
var requester = zmq.socket('req');
var system_state = {}
var responses = {};
requester.connect("tcp://127.0.0.1:5555");

requester.on("message", function(data) {
    console.log("The requester has been triggered")
    system_state = JSON.parse(data)
    var msgId = data.id;
    console.log(system_state)
    console.log(msgId)
    var res = responses[system_state.id];
    console.log(res)
    if (res) {
      // res.writeHead(200, { 'Content-Type': 'application/json' });
      console.log("GOLD?")
      res.json(system_state);
      responses[msgId] = null;
    } 
   
    // requester.close();
    // process.exit(0);
});

// console.log("Producer bound to port 3000");
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/style.css', express.static(__dirname + '/style.css')); // add local css
app.use('/script.js', express.static(__dirname + '/script.js')); // add local js

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  // the state of all the data. fake till you make it.
app.get('/update', function(req, res) {
  // Get the updated state from the ZMQ instance
  
  // socket.send_string(message_mapping[str(msg.control)])
    var msgId = uuid.v4();
    var data = { id: msgId, message: 'GET_SNAPSHOT' };
    console.log(msgId)
    responses[msgId] = res;
    requester.send(JSON.stringify(data));
});

// two things
// 1 create a new route what is responsible for getting new data.
// 2 
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})