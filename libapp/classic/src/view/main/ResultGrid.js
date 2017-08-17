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
           { text: 'Title',  dataIndex: 'title', flex:1 , renderer: function (value, l , record , m) {

   														var tmp = "";
   														tmp = "<b>Title: </b>" + record.get("title") +"<br>";
   														tmp = tmp + "<b>Subject: </b>" + record.get("subject") + "<br>";
   														tmp = tmp + "<b>Script: </b>" + record.get("script");
   														return tmp;
   												}},
           { text: 'url', dataIndex: 'url', flex: 1, renderer: function (value, l , record , m) {
   														var tmp = '<a href="' + record.get("url")[0]+'">' + "Download" +"</a>";
   														return tmp;
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
