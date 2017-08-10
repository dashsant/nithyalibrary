if(!global['App']) {
    global.App = {};
}

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeCleanup = require('node-cleanup');


var path = require('path');

var router = express.Router()

var onedaymillisceonds = 24*60*60*1000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



// POST method route
router.post('/librrary/filter', function (req, res) {
  console.log(req.body)
  res.setHeader('Content-Type', 'application/json');
  res.send(req.body)
})

app.use(express.static(path.join(__dirname, 'libapp')));

app.use('/api', router);

app.listen(9950);

nodeCleanup(function (exitCode, signal) {
    // release resources here before node exits 

    global.App.newsdb.close();
});
