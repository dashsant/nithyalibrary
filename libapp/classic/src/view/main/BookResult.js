Ext.define('library.view.main.BookResult', {
    extend: 'Ext.Panel',
    xtype: 'bookresult',
    autoScroll:'true',
	layout:'vbox',
	width:'100%',
    requires: [
        'library.view.main.MainModel',
		'library.view.main.BookGrid',
		'library.store.BookStore'
    ],

	viewModel:{
		type:'main'
	},
	items:[
	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		height:475,
		//height:'100%',
		items:[
		{
			xtype:'book-grid',
			id:'book-grid',
			margin:'10 0 10 10',
			store:Ext.create('library.store.BookStore',{autoLoad:true}),
			//height:400,
			height:'90%',
			width:'100%'

		}
		]
	}
	]

});