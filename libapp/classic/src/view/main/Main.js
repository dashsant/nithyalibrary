/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('library.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
	height:'100%',
	width:'100%',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
		'Ext.tab.Panel',
        'library.view.main.MainController',
        'library.view.main.MainModel',
        'library.view.main.List',
		'library.view.main.LibraryHome',
		'library.view.main.SearchResult',
		

    ],
    layout: 'vbox',
    items: [{
        html: "Swamiji's quote goes here. We need to store all the quotes in a database. Need to show one quote as a time in an interval of 30 seconds",
		xtype:'component',
		padding: '4 20 5 20',
        style: 'background-color:rgb(217, 65, 3);font-size:12;color:#fff;font-weight: 400;',
		height:40,
		width:'100%'
		},
		{
			xtype:'panel',
			layout:'hbox',
			margin: '25 0 0 125',
			items:
			[
				{
				xtype: 'textfield',
				width:400,
				name: 'searchText'
				},
				{
				xtype: 'button',
				height:32,
				text:'S',
				width:32,
				padding:0,
				border:false,
				style: 'background-color: rgb(240, 176, 148);font-size:18;color:#fff;font-weight: bold;',
				//icon:'/resources/search-32.png',
				name: 'btnSearch',
				handler:function(){
					Ext.getCmp('bottomCardPanel').setActiveItem(1);
				}
				}
			]	
		},
		{
			xtype:'panel',
			layout:{
				type:'card',
				align:'stretch'
			},
			id:'bottomCardPanel',
			margin: '25 0 0 0',
			width:'100%',
			items:
			[
				{
				xtype: 'libraryhome'
				},
				{
				xtype: 'searchresult'
				}
			]	
		}
		
	]
});