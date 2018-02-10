Ext.define('library.view.main.MenuscriptCategoryGrid', {
    extend: 'Ext.grid.Panel',
		xtype:'menuscript-category-grid',
		height:'100%',
		flex:3,
		hideHeaders:true,
       columns: [
           { text: 'Title',  dataIndex: 'title', flex:3 , renderer: function (value, l , record , m) {

   			var tmp = "";
   			tmp = "<b>Title: </b>" + record.get("title") +"<br>";
   			tmp = tmp + "<b>Subject: </b>" + record.get("subject") + "<br>";
			tmp = tmp + "<b>Script: </b>" + record.get("script");
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
       ],
	   	bbar: {
				xtype: 'pagingtoolbar',
				id:'menuscript-pagingtoolbar-id'
				
			}
});
