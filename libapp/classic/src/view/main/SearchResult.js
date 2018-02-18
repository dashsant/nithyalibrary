Ext.define('library.view.main.SearchResult', {
    extend: 'Ext.Panel',
    xtype: 'searchresult',
    //autoScroll:'true',
	layout:'vbox',
	width:'100%',
	height:460,
    requires: [
        'library.view.main.MainModel',
		'library.view.main.FilterTree',
		'library.view.main.ResultGrid',
		'library.store.CatalogSearchResult'
    ],

	viewModel:{
		type:'main'
	},
	controller:'main',
	items:[
		{
			xtype:'container',
			layout:{type:'hbox', align:'top'},
			height:45,
			items:[
				{
					id:'searchLabel-id',
					html: '<h3> Currently there are no previous results available to be shown </h3>',
					xtype:'label',
					margin: '0 15 0 0'
				},
				{ 
					xtype: 'button', 
					text: 'Apply Filter',
					handler: 'onApplyFilterClick',
					style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;text-indent:2px', 
					margin: '8 0 0 0',
					id:'apply-filter-btn',
					hidden:true
				}
			]
		},
		{
			xtype:'container',
			layout:'hbox',
			width:'100%',
			height:450,
			border:false,
			items:[
			{
				xtype:'filter-tree',
				id: 'filter-tree-id',
				margin:'0',padding:'0 12 0 12',
				height:'80%',
				border: false,
			},
			{
				xtype:'result-grid',
				id:'result-grid-id',
				margin: '0',
				height:'80%',
				store:Ext.create('library.store.CatalogSearchResult',{autoLoad:false})
			}
			]
		}
	]
});
