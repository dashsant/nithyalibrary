Ext.define('library.view.main.ResultGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
            'library.store.CatalogSearchResult'
        ],
        viewModel: {
        stores: {
            searchResultStore: {
                type: 'searchresultstore'
            }
        }
    },
		height:'100%',
		flex:3,
		hideHeaders:true,
        xtype: 'result-grid',
    //   bind: '{searchResultStore}',
       columns: [
           { text: 'Title',  dataIndex: 'title', flex:3 , renderer: function (value, l , record , m) {

   			var tmp = "";
   			tmp = "<b style=\"font-weight:bold;\">Title: </b>" + record.get("title") +"<br>";
   			tmp = tmp + "<b style=\"font-weight:bold;\">Subject: </b>" + record.get("subject") + "<br>";
			tmp = tmp + "<b style=\"font-weight:bold;\">Script: </b>" + record.get("script");
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
//       width: 400,
//       height: 400
});
