Ext.define('library.view.main.BookResult', {
    extend: 'Ext.Panel',
    xtype: 'bookresult',
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
		xtype:'tabpanel',
		width:'100%',
		items:[
				{
					title:"Popular Titles"
				},
				{
					title:"All",
					items:[
					{
						xtype:'book-grid',
						id:'book-grid',
						margin:'0',
						store:Ext.create('library.store.BookStore',{autoLoad:false}),
						width:'100%',
						height:350,
						listeners:{
							render:function(me , opts){
								console.log(me);
								s = Ext.getCmp('book-grid').getStore();
								if(!s.isLoaded())
									s.load();
							}
						}
					}
					]
				}
		]
	}
	]

});