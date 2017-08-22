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
    id:'result-grid-id',
    height:'100%',
  	flex:3,
    hideHeaders:true,
       xtype: 'result-grid',
       bind: '{searchResultStore}',
       columns: [
           { text: 'Title',  dataIndex: 'title', flex:3 , renderer: function (value, l , record , m) {

   														var tmp = "";
   														tmp = "<b>Title: </b>" + record.get("title") +"<br>";
   														tmp = tmp + "<b>Subject: </b>" + record.get("subject") + "<br>";
   														tmp = tmp + "<b>Script: </b>" + record.get("script");
   														return tmp;
   												}},
           { text: 'url', dataIndex: 'url', flex: 1, renderer: function (value, l , record , m) {
														if(record.get("url").length == 1){
															var tmp = '<a target="_blank" ' + +'href="' + record.get("url")[0]+'">' + "Download" +"</a>";
															return tmp;
														}
														else{
															var a = record.get("url");
															var tmp = '<a target="_blank" ' + +'href="' + a[0]+'">' + "Download 1" +"</a> ";
															
															for(var i = 1 ; i < a.length ; i++){
																var t = '<a target="_blank" ' + +'href="' + a[i]+'">' + (i+1).toString() +"</a> ";
																tmp = tmp+t;
															}
															return tmp;
														}
   												}}

       ],
       width: 400,
          height: 400,
       dockedItems: [
        {
           xtype: 'pagingtoolbar',
           bind: '{searchResultStore}',
           dock: 'bottom',
           displayInfo: true
       }]
});
