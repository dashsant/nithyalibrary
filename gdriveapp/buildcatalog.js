var l1 = require('./l1.json');
var l2Files = require('./l2-files.json');
var l2Folders = require('./l2-folders.json');

var fs = require('fs');
var LineByLineReader = require('line-by-line');
fs.openSync('error.txt', 'w');
fs.openSync('output.txt', 'w');
    
lr = new LineByLineReader('./Working.csv');

var links = [];

fs.readFile('./Working.csv', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(data);
});

lr.on('error', function (err) {
	// 'err' contains error object
});
var skip = true;
lr.on('line', function (line) {
	if(skip == true)
	{
		skip = false;
	}
	else
	{
		//Sl.No.,RE Number,Title,Sub. Dec.,Script,Material,Condition
		//1,RE 00999,Purvapakshaavali (Vyaakarana),Vyaakarana,Devanaagari,Paper,
		var obj = {};
		var f = line.split(",");
		if(f[0].length > 0)
		{
			obj.serialNo = parseInt(f[0]);
			obj.reNumber = f[1].split(" ")[0] + f[1].split(" ")[1];
			obj.title = f[2];
			obj.subject = f[3];
			obj.script = f[4];
			obj.material = f[5];
			var f1 = l2Folders[obj.reNumber];
			if(typeof(f1) != 'undefined')
				obj.link = f1;
			else 
			{
				var matchedLinks = [];
				for (var key in l2Files)
				{
					if(key.includes(obj.reNumber))
					{
						matchedLinks.push(l2Files[key]);
					}
				}
				obj.link = matchedLinks;
				if(matchedLinks.length == 0)
				{
					console.log("Could not find the link for => " + obj.reNumber);
				}
			}
			links.push(obj);
		}
		else
		{
			if(f[2].length > 0 )
			{
				if(Array.isArray(links[links.length-1].title))
				{
					
					links[links.length-1].title.push(f[2]);
				}
				else
				{
						var tmp = [];
						tmp.push(links[links.length-1].title);
						tmp.push(f[2]);
						links[links.length-1].title = tmp
				}
			}
		}
	}
	
});

lr.on('end', function () {
	// All lines are read, file is closed now.
	for(var i in links)
	{
		var line = links[i].serialNo + ",";
		line = line + links[i].reNumber + ",";
		line = line + String(links[i].title) + ",";
		line = line + String(links[i].subject) + ",";
		line = line + String(links[i].script) + ",";
		line = line + String(links[i].material) + ",";
		line = line + String(links[i].link);
		fs.appendFileSync("./output.txt", line + "\n");
		if(Array.isArray(links[i].link) && links[i].link.length == 0){
			fs.appendFileSync("./error.txt", line + "\n");
		}
	}
	
});
