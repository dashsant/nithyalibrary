if(!global['App']) {
    global.App = {};
}

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeCleanup = require('node-cleanup');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: '45.18.12.178:9200',
  log: 'error'
});


var path = require('path');

var router = express.Router()

var onedaymillisceonds = 24*60*60*1000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

var esFliterObj =
{
index: 'nithya_index',
type: 'manuscript',
body: 
{
  size: 500,
  query: { 
    bool: {
    must:[
      {
       multi_match: {
        query: "???",
        type: "phrase_prefix",
		fields: [  "search_all" ],
        tie_breaker: 0.3
    }}],
    filter: [ 
      
    ]
    }
  },
  aggregations : {
    category_count : {
        terms : { 
            field:"category"
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
; 

var esSearchObj = 
{
	index: 'nithya_index',
	type: 'manuscript',
	body:{
	  size: 500, 
	  query: {
		multi_match: {
			query: "???",
			type: "phrase_prefix",
			fields: [  "search_all" ],
			tie_breaker: 0.3
		}
	  },
	  aggregations : {
		category_count : {
			terms : { 
				field:"category"
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
  var sb;
  if( req.body.hasOwnProperty("catFilter") || req.body.hasOwnProperty("catFilter")){
    sb = JSON.parse(JSON.stringify(esFliterObj));
    sb.body.query.bool.must[0].multi_match.query  = req.body.searchText;
    if( req.body.hasOwnProperty("catFilter")){
      if(req.body.catFilter.length > 0){
        var catTerms = {};
        catTerms.terms = { category:req.body.catFilter}
        sb.body.query.bool.filter.push(catTerms);
      }
    }
    if( req.body.hasOwnProperty("scriptFilter")){
      if(req.body.scriptFilter.length > 0){
        var scriptTerms = {};
        scriptTerms.terms = { script:req.body.scriptFilter}
        sb.body.query.bool.filter.push(scriptTerms);
      }
    }

  }
  else{
    sb = JSON.parse(JSON.stringify(esSearchObj));
    sb.body.query.multi_match.query = req.body.searchText;
  }
  client.search(sb).then(function (resp)
  {
    var matchList = processSearchResult( resp.hits , resp.aggregations) 
    res.setHeader('Content-Type', 'application/json');
    res.send(matchList)
  },
  function (err)
  {
    console.trace(err.message);
  }
  );
})

// POST method route
router.post('/librrary/scripture/by_category', function (req, res) {
	
	var sb = 
	{
		index: 'nithya_index',
		type: 'manuscript',
		body:{	
			size: req.body.limit, 
			from: req.body.start,
			query: {
				match: {
					category:{
					query: req.body.q,
					fuzziness:1
					}
				}
			}
		}
	}

  client.search(sb).then(function (resp)
  {
    var matchList = {
       items:[],
	   total:resp.hits.total,
	   success:true
    }
    resp.hits.hits.forEach(function(el){
        var o = {}
        o.title = el._source.title;
        o.subject = el._source.subject;
        o.url = el._source.url;
        o.script = el._source.script;
        o.id = el._id;
        matchList.items.push(o);
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(matchList)
  },
  function (err)
  {
    console.trace(err.message);
  }
  );
})

app.post('/login', function (req, res) {
	var username = req.body.username,
		password = req.body.password,
		response = {"success":false,"msg":""};
	
	if(username == "RajaRajeshwari" && "Sundareshwara"){
		response.success = true;
		response.msg = "OK";
	}
	res.setHeader('Content-Type', 'application/json');
    res.send(response);
});
router.post('/librrary/book/all', function (req, res) {
	var sb = 
	{
		index: 'nithya_book_index',
		type: 'book',
		body:{	
			size: 500, 
			query: {
				match_all: {

				}
			}
		}
	}

  client.search(sb).then(function (resp)
  {
    var matchList = {
       items:[],
	   total:resp.hits.total,
	   success:true
    }
    resp.hits.hits.forEach(function(el){
        var o = {}
        o.title = el._source.title;
        o.subject = el._source.subject;
        o.url = el._source.url;
        o.script = el._source.script;
		o.abstract=el._source.abstract;
		o.author = el._source.author;
        o.id = el._id;
        matchList.items.push(o);
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(matchList)
  },
  function (err)
  {
    console.trace(err.message);
  }
  );
})



function processSearchResult(hits , aggr)
{
    var matchList = {
       items:[]
    }
    hits.hits.forEach(function(el){
        var o = {}
        o.title = el._source.title;
        o.subject = el._source.subject;
        o.url = el._source.url;
        o.script = el._source.script;
        o.id = el._id;
        matchList.items.push(o);
        });
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
    matchList.totalMatched = hits.total;
    if( matchList.totalMatched < 500 )
        matchList.totalReturned = matchList.totalMatched;
    else
        matchList.totalReturned = 500
    return matchList;
}

//app.use(express.static(path.join(__dirname, 'libapp/build/production/library')));
app.use(express.static(path.join(__dirname, 'libapp')));

app.use('/api', router);

app.listen(3000);

nodeCleanup(function (exitCode, signal) {
    // release resources here before node exits 
});