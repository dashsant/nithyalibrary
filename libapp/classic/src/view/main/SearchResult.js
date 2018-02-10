Ext.define('library.view.main.SearchResult', {
    extend: 'Ext.Panel',
    xtype: 'searchresult',
    autoScroll:'true',
	layout:'vbox',
	width:'100%',
    requires: [
        'library.view.main.MainModel',
		'library.view.main.FilterTree',
		'library.view.main.ResultGrid',
		'library.store.CatalogSearchResult'
    ],

	viewModel:{
		type:'main'
	},
	items:[
	{
		id:'searchLabel-id',
		html: '<h2> Currently there are no previous results available to be shown </h2>',
		xtype:'label',
		margin: '0 0 0 200'
	},
	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		height:800,
		items:[
		{
			xtype:'filter-tree',
			id: 'filter-tree-id',
			margin: '10 0 0 10'

		},
		{
			xtype:'result-grid',
			id:'result-grid-id',
			margin:'10 0 0 10',
			store:Ext.create('library.store.CatalogSearchResult',{autoLoad:false}),
			height:400
		}
		]
	}
	]

});
