const express = require('express'); // for server
const bodyParser = require('body-parser'); // for parsing requests sent to and from client and db
const app = express(); // express app creation
app.use(bodyParser.json()); // for parsing application/json format data
app.use(bodyParser.urlencoded({ extended: true })) // for parsing requests of content-type application/x-www-form-urlencoded
var http = require('http').createServer(app);

const cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.post('/imageMatch', (req, res)=>{
    res.json({success:true}).send(200);
})

// starting server on port 8081
const server = http.listen(8081, () => {
    var hostIP = server.address().address;
    var hostPort = server.address().port;

    console.log('Server started at http://'+hostIP+':'+hostPort);
});
