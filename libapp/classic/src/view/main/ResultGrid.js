Ext.define('library.view.main.ResultGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'result-grid',
	height:'100%',
	flex:3,
	//width:600,
	hideHeaders:true,
    requires: [
        //'library.store.Personnel'
		'library.store.CatalogSearchResult'
		
    ],

    store: Ext.create('library.store.CatalogSearchResult'),

    columns: [
        { text: 'Title',  dataIndex: 'title', flex:1 , renderer: function (value, l , record , m) {
														
														var tmp = "";
														tmp = "<b>Title:</b>" + record.get("title") +"<br>";
														tmp = tmp + "<b>Subject:</b>" + record.get("subject") + "<br>";
														tmp = tmp + "<b>Script:</b>" + record.get("script");														
														return tmp;
												}},
        { text: 'url', dataIndex: 'url', flex: 1, renderer: function (value, l , record , m) {
														
														var tmp = "";
														tmp = "<b>Title:</b>" + record["title"] +"<br>";
														tmp = tmp + "<b>Subject:</b>" + record["subject"] + "<br>";
														tmp = tmp + "<b>Script:</b>" + record["script"];														
														return tmp;
												}}
        
    ]
});