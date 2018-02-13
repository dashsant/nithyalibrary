Ext.define('library.view.main.BookGrid', {
    extend: 'Ext.grid.Panel',
		xtype:'book-grid',
		height:'85%',
		flex:3,
		hideHeaders:true,
       columns: [
           { text: 'Title',  dataIndex: 'title', flex:2 , renderer: function (value, metaData , record , m) {

   			var tmp = "";
   			tmp = "<b style=\"font-weight:bold;\">Title: </b>" + record.get("title") +"<br>";
   			tmp = tmp + "<b style=\"font-weight:bold;\">Subject: </b>" + record.get("subject") + "<br>";
			tmp = tmp + "<b style=\"font-weight:bold;\">Author: </b>" + record.get("author");
   			return tmp;
   			}
			},
           { text: 'Abstract',  dataIndex: 'abstract', flex:3,cellWrap: true , renderer: function (value, l , record , m) {

   			// get only first 300 characters, Rest display as mouse over
			
			var tmp = record.get("abstract").substring(0,300);
			if(record.get("abstract").length > 300)
				tmp = tmp + " ...";
   			tmp = "<b style=\"font-weight:bold;\">Abstract: </b>" + tmp +"<br>";
			l.tdAttr = 'data-qtip="' + Ext.String.htmlEncode(record.get("abstract")) + '"';
   			return tmp;
   			}
			},			
           { text: 'url', dataIndex: 'url', flex: 1, renderer: function (value, l , record , m) {
			var a = record.get("url");
			if(typeof(a) === 'string'){
                                var tmp = '<a target="_blank" ' +'href="' + a+'">' + "Download" +"</a>";
				return tmp;
			}
			else if(a.length == 1){
				var tmp = '<a target="_blank" ' +'href="' + a[0]+'">' + "Download" +"</a>";
				return tmp;
			}
			else{
				var tmp = '<a target="_blank" ' +'href="' + a[0]+'">' + "Download 1" +"</a> ";
															
				for(var i = 1 ; i < a.length ; i++){
					var t = '<a target="_blank" ' +'href="' + a[i]+'">' + (i+1).toString() +"</a> ";
					tmp = tmp+t;
					if(i%8 == 0){
						tmp = tmp + "<br>";
					}
   				}
				return tmp;
			}
		}
	   }
       ]
});
