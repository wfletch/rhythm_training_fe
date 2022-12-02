const express = require('express');
const path = require('path');
// const bootstrap = require('bootstrap');
const app = express()
const port = 3000
var tick_count = 1
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

    let anObject = {
        "key": (tick_count%4) + 1,
        "timestamp" : new Date().toLocaleString()
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