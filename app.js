const express = require('express');
const path = require('path');
const zmq = require("zeromq");
// const bootstrap = require('bootstrap');
const app = express()
const port = 3000
var tick_count = 1
var requester = zmq.socket('req');
var system_state = {}
requester.connect("tcp://127.0.0.1:5555");

requester.on("message", function(reply) {
    console.log("The requester has been triggered")
    system_state = reply.toString()
    console.log(system_state)
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
  requester.send("GET_SNAPSHOT"); 
  // socket.send_string(message_mapping[str(msg.control)])
    let anObject = {
        "key": (tick_count%4) + 1,
        "timestamp" : new Date().toLocaleString(),
        "system_state": system_state
    }
    tick_count+=1;
    res.json(anObject);
});

// two things
// 1 create a new route what is responsible for getting new data.
// 2 
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})