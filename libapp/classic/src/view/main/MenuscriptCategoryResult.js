Ext.define('library.view.main.MenuscriptCategoryResult', {
    extend: 'Ext.Panel',
    xtype: 'menuscriptcategoryresult',
    autoScroll:'true',
	layout:'vbox',
	width:'100%',
    requires: [
        'library.view.main.MainModel',
		'library.view.main.MenuscriptCategoryTree',
		'library.view.main.MenuscriptCategoryGrid',
		'library.store.CatalogSearchResult',
		'library.store.MenuscriptCategoryStore'
    ],

	viewModel:{
		type:'main'
	},
	items:[
	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		height:500,
		//height:'100%',
		items:[
		{
			xtype:'menuscript-cat-tree',
			id: 'menuscript-cat-tree-id',
			margin: '10 0 10 10',
			height:'90%'
		}
		,
		{
			xtype:'menuscript-category-grid',
			id:'menuscript-category-result-grid',
			margin:'10 0 10 10',
			store:Ext.create('library.store.MenuscriptCategoryStore',{autoLoad:false}),
			//height:400,
			height:'90%',
			width:'100%'

		}
		]
	}
	]

});
