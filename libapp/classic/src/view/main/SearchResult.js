Ext.define('library.view.main.SearchResult', {
    extend: 'Ext.Panel',
    xtype: 'searchresult',
	layout:'vbox',
	width:'100%',
    requires: [
        'library.view.main.MainModel',
		'library.view.main.FilterTree',
		'library.view.main.ResultGrid'

    ],
	viewModel:{
		type:'main'
	},
	
	items:[
	
	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		items:[
			{
				bind:{
				html: '<h2>{resultCount} Matches Found For {searchString}</h2>'
				},
				xtype:'label',
				margin: '0 0 0 200'
			},
			{
				text:"Go To Home",
				xtype:'button',
				margin: '10 0 0 200',
				style: 'background-color: rgb(240, 176, 148);',
				handler: function(){
					Ext.getCmp('bottomCardPanel').setActiveItem(0);
				}
			}			
		]
		
	},
/*	{
		bind:{
		html: '<h2>{resultCount} Matches Found For {searchString}</h2>'
		},
		xtype:'label',
		margin: '0 0 0 200'
	},*/
			
	{
		xtype:'component',
		width:'100%',
		height: '2px',
		style:'background-color:rgb(217, 65, 3);',
		margin: '10 0 0 10'
	},
	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		height:800,
		items:[
		{
			xtype:'filter-tree',
			margin: '10 0 0 10'
		},
		{
			xtype:'result-grid',
			margin:'10 0 0 10'
		}
		]
	}
	]

});