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
	id:'app-main',
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
	viewModel: 'main',
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
					name: 'searchText',
					bind: {
							value: '{searchString}'
						}
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
						var s = Ext.getCmp('result-grid-id').getStore();
						d = Ext.getCmp('app-main').getViewModel().getData();
						console.log(d);
						s.getProxy().setExtraParam("searchString" , d.searchString);
						s.load();

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
	],
	dockedItems:
		[
			{
				xtype:'toolbar',
				dock:'bottom',
				width:'100%',
				layout:'hbox',
				items:
				[
					{
						html: 'Copyright © 2017 Nithyananda University Press',
						xtype:'component'
					},
					{
						xtype:'component',
						name: 'facebook',
						padding: '0 0 0 25',
						html:'<a href="https://www.facebook.com/nithyanandauniversitypress">'+
						'<img src="../../resources/facebook.png" style="width: 20px;height: 20px;" /></a>'
					},
					{
						xtype:'component',
						name: 'twitter',
						padding: '0 0 0 25',
						html:'<a href="http://twitter.com/SriNithyananda">'+
						'<img src="../../resources/twitter.jpg" style="width: 20px;height: 20px;" /></a>'
					},
					{
						xtype:'component',
						name: 'youtube',
						padding: '0 0 0 25',
						html:
						'<a href="http://www.youtube.com/nithyanandatv">'+
						'<img src="../../resources/youtube.png" style="width: 20px;height: 20px;" /></a>'
					},
					{
						xtype:'component',
						name: 'mailto',
						padding: '0 0 0 25',
						html:'<a href="mailto:enpublishers@nithyananda.org">'+
						'<img src="../../resources/mailto.jpg" style="width: 20px;height: 20px;" /></a>'
					}
				]	
			}
	]

});