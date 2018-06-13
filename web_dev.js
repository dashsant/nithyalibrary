if(!global['App']) {
    global.App = {};
}

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeCleanup = require('node-cleanup');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: '192.168.0.3:9200',
  log: 'error'
});

var mongoClient = require('mongodb').MongoClient;

var mongoDb = null;
// Connect to the db
mongoClient.connect("mongodb://localhost:27017", function(err, db) {
  if(!err) {
		mongoDb = db.db("archive_org");
		console.log("We are connected");
  }
  else{
  console.log(err);
  }
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

app.use(express.static(path.join(__dirname, 'libapp/build/production/library')));
//app.use(express.static(path.join(__dirname, 'libapp')));

app.use('/api', router);

app.listen(3000);

nodeCleanup(function (exitCode, signal) {
    // release resources here before node exits 
});

app.post('/api/library/review/reject', function(req,res){
	mongoDb.collection("arch").findOne({_id:req.body.identifier}, function(err, result){
	if(!err){
		result.reviewStatus = "Rejected";
		mongoDb.collection("arch").deleteOne({_id:req.body.identifier},	null, function(err,r){
			if(!err){
				mongoDb.collection("arch_review").insertOne(result ,null, function(err,r){});
				res.send({success:true});
			}
			else{
				res.send({success:false});
			}
			
		});
	}
	else{
		res.send({success:false});
	}
	});
});


app.post('/api/library/review/assign', function (req, res) {
	// get the first record which is assigned to any user and has not been marked "reviewed"
	var qry = {
		reviewer : req.body.reviewer,
		reviewStatus : "Pending"
	}
	mongoDb.collection("arch").findOne(qry, function(err, result){
		if(!err){
			if(result != null){
				res.setHeader('Content-Type', 'application/json');
				res.send(result);
			}
			else{
				mongoDb.collection("arch").findOne({ "reviewer" : { "$exists" : false } }, function(err, result){
					if(!err)
					{
						result.reviewer = req.body.reviewer;	
						result.reviewStatus = 'Pending';
						var newvalues = { $set:{
							reviewer:req.body.reviewer,
							reviewStatus:'Pending'
						}};
						mongoDb.collection("arch").updateOne({_id:result._id},newvalues ,null, function(err,r){
							if(!err){
								res.setHeader('Content-Type', 'application/json');
								res.send(result);
							}
							else{
								res.setHeader('Content-Type', 'application/json');
								res.send({success:false});
							}

						});
					}
					else{
						res.setHeader('Content-Type', 'application/json');
						res.send({success:false});

					}
				});
			}
		}
		else{
			res.setHeader('Content-Type', 'application/json');
			res.send({success:false});
		}
	});
});

app.post('/api/library/review/save', function (req, res) {
	var review = req.body;
	res.setHeader('Content-Type', 'application/json');
	var id = review.identifier;
	var reviewObj = review;
	mongoDb.collection("arch").findOne({_id:id}, function(err, result){	
		if(!err){
			result.reviewStatus = "Reviewed";
			result.title = reviewObj.title;
			if(reviewObj.type == 1){
				result.r_category = reviewObj.category;
				result.r_author1 = reviewObj.author1;
				result.r_contributor1 = reviewObj.contributor1;
				result.r_author2 = reviewObj.author2;
				result.r_contributor2 = reviewObj.contributor2;
				result.r_author3 = reviewObj.author3;
				result.r_contributor3 = reviewObj.contributor3;
				result.r_author4 = reviewObj.author4;
				result.r_contributor4 = reviewObj.contributor4;
				result.r_publisher = reviewObj.publisher;
				result.r_published_on = reviewObj.published_on;
				result.r_numpages = reviewObj.numpages;
				result.r_description = reviewObj.description;
				result.r_metadata = reviewObj.metadata;
				result.r_isbn = reviewObj.isbn;
				result.r_copyright = reviewObj.copyright;
				result.r_languages = reviewObj.languages;
				result.r_price = reviewObj.price;
				result.r_edition = reviewObj.edition;
			}
			else{
				result.manuscript_script = reviewObj.manuscript_script;
				result.manuscript_material = reviewObj.manuscript_material;
				result.manuscript_scribe = reviewObj.manuscript_scribe;
				result.manuscript_subject = reviewObj.manuscript_subject;
				result.manuscript_institute = reviewObj.manuscript_institute;
				result.manuscript_address = reviewObj.manuscript_address;
				result.manuscript_foliosinbundle = reviewObj.manuscript_foliosinbundle;
				result.manuscript_condition = reviewObj.manuscript_condition;
				result.manuscript_foliosintext = reviewObj.manuscript_foliosintext;
				result.manuscript_textrange = reviewObj.manuscript_textrange;
				result.manuscript_lines = reviewObj.manuscript_lines;
				result.manuscript_length = reviewObj.manuscript_length;
				result.manuscript_width = reviewObj.manuscript_width;
				result.manuscript_beginningline = reviewObj.manuscript_beginningline;
				result.manuscript_endingline = reviewObj.manuscript_endingline;
				result.manuscript_notes = reviewObj.manuscript_notes;
				result.manuscript_remarks = reviewObj.manuscript_remarks;
			}
			mongoDb.collection("arch_review").insertOne(result ,null, function(err,r){
				if(!err){
					mongoDb.collection("arch").deleteOne({_id:result._id},	null, function(err,r){
						if(!err){res.send({success:true});}
						else{res.send({success:false});}
					});
				}
				else{res.send({success:false});}
			});
		}
		else{res.send({success:false});}
			
	});
});



app.post('/login', function (req, res) {
	var	response = {"success":false,"msg":""};
	
	if(req.body.reviewer == "RajaRajeshwari" && req.body.password == "Sundareshwara"){
		response.success = true;
		response.msg = "OK";
	}
	res.setHeader('Content-Type', 'application/json');
	res.send(response);
});
