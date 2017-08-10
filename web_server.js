if(!global['App']) {
    global.App = {};
}

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeCleanup = require('node-cleanup');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


var path = require('path');

var router = express.Router()

var onedaymillisceonds = 24*60*60*1000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


var esSearchObj = 
{
	index: 'nithya_index',
	type: 'manuscript',
	body:{
	  size: 500, 
	  query: {
		match: {
		  search_all: {
			query: "???",
			fuzziness: 1,
			prefix_length: 1
		  }
		}
	  },
	  aggregations : {
		category_count : {
			terms : { 
				field:"tags"
			}
		},
		script_count : {
		terms : { 
			 field:"script"
			}
		}
	  }  
	}
}
// POST method route
router.post('/librrary/filter', function (req, res) {
  var sb = esSearchObj;
  sb.body.query.match.search_all.query = req.body.searchText;
  client.search(sb).then(function (resp)
  {
    var hits = resp.hits.hits;
    var matchList = {
       items:[]
    }
    hits.forEach(function(el){
        var o = {}
	o.title = el._source.title;
	o.subject = el._source.subject;
	o.url = el._source.url;
	o.script = el._source.script;
	o.id = el._id;
	matchList.items.push(o);
	});
    var aggr = resp.aggregations;
    var filterTree = {};
    var b = aggr.script_count.buckets;
    b.forEach(function(el){
        filterTree[el.key] = el.doc_count;
    });
    b =  aggr.category_count.buckets;
    b.forEach(function(el){
        filterTree[el.key] = el.doc_count;
    });
    matchList.filterTree = filterTree;
    matchList.totalMatched = resp.hits.total;
    if( matchList.totalMatched < 500 )
        matchList.totalReturned = matchList.totalMatched;
    else
	matchList.totalReturned = 500
    res.setHeader('Content-Type', 'application/json');
    res.send(matchList)
  },
  function (err)
  {
    console.trace(err.message);
  }
  );
})

app.use(express.static(path.join(__dirname, 'libapp')));

app.use('/api', router);

app.listen(9950);

nodeCleanup(function (exitCode, signal) {
    // release resources here before node exits 
    global.App.newsdb.close();
});
