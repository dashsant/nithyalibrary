Ext.define('library.view.main.MenuscriptCategoryResult', {
    extend: 'Ext.Panel',
    xtype: 'menuscriptcategoryresult',
    autoScroll:'true',
	layout:'vbox',
	width:'100%',
    requires: [
        'library.view.main.MainModel',
		'library.view.main.MenuscriptCategoryTree',
		'library.view.main.ResultGrid',
		'library.store.CatalogSearchResult'
    ],

	viewModel:{
		type:'main'
	},
	items:[
	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		height:800,
		items:[
		{
			xtype:'menuscript-cat-tree',
			id: 'menuscript-cat-tree-id',
			margin: '10 0 0 10'

		}
		,
		{
			xtype:'result-grid',
			id:'menuscript-category-result-grid',
			margin:'10 0 0 10',
			store:Ext.create('library.store.CatalogSearchResult',{autoLoad:false})
		}
		]
	}
	]

});
