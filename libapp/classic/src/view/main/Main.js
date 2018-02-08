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
		'library.view.main.LibraryHome'
    ],
	viewModel: 'main',
	controller:'main',

    layout: 'vbox',
    items: [{
			xtype:'container',
			layout:'hbox',
			style: 'background-color:rgb(217, 65, 3);font-size:12;color:#fff;font-weight: 400;',
			height:40,
			width:'100%',
			items:[
			{
				xtype:'component',
				width: 36,
				padding:'2 2 2 2',
				html:'<img src="/resources/NUP_logo_no_text.jpg"  height="36" width="36">',
			},
			{
				xtype:'component',
				html: "<p style=\"text-indent: 2em;\"><q><i>If you want to retain anything life renounce the fear of losing it.</i></q><b>-- H. H. Paramahamsa Nithyananda</p></b> ",
				padding: '4 20 15 20' // Same as CSS ordering (top, right, bottom, left)
			}
			]
		},
		{
			xtype:'panel',
			layout:{
				type: 'hbox',
				align: 'middle'
			},
			margin: '5 0 0 5',
			defaultButton:'btnSearch',
			referenceHolder: true,
			items:
			[
				{
					margin: '5 0 0 75',
					xtype: 'container',
					width:100,
					style:'line-height:180%',
					html:"<h3>Nithyananda<br>Digital<br>Library</h3>"
				},			

				{
					xtype: 'textfield',
					width:400,
					
					margin: '0 0 0 50',
					name: 'searchText',
					id: 'searchText',
					emptyText: 'Type to search'
				},
				{
					xtype: 'button',
					reference: 'btnSearch',
					height:32,
					text:'S',
					width:32,
					padding:0,
					border:false,
					style: 'background-color: rgb(240, 176, 148);font-size:18;color:#fff;font-weight: bold;',
					//icon:'/resources/search-32.png',
					name: 'btnSearch',
					handler : 'onSearchTextClick'  // no scope given here
				}
			]
		},
		{
			xtype:'libraryhome',
			//layout:{
			//	type:'card',
			//	align:'stretch'
			//},
			id:'libraryhomePage',
			//margin: '25 0 0 0',
			//width:'100%',
			//items:
			//[
			//	{
			//	xtype: 'libraryhome'
			//	},
			//	{
			//	xtype: 'searchresult'
			//	}
			//]
		}
	],
	dockedItems:
		[
      	{
  				xtype:'toolbar',
  				dock:'bottom',
  				width:'100%',
          style: {
            borderTop: 0
          },
          layout: {
            pack: 'center',
            type: 'hbox'
          },
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
  						html:'<a href="https://www.facebook.com/nithyanandauniversitypress"><div style="color:#d94103"><i class="fa fa-facebook"></i></div></a>'
  					},
  					{
  						xtype:'component',
  						name: 'twitter',
  						padding: '0 0 0 25',
  						html:'<a href="http://twitter.com/SriNithyananda"><div style="color:#d94103"><i class="fa fa-twitter"></i></div></a>'
  					},
  					{
  						xtype:'component',
  						name: 'youtube',
  						padding: '0 0 0 25',
  						html:'<a href="http://www.youtube.com/nithyanandatv"><div style="color:#d94103"><i class="fa fa-youtube-play"></i></div></a>'
  					},
  					{
  						xtype:'component',
  						name: 'mailto',
  						padding: '0 0 0 25',
  						html:'<a href="mailto:enpublishers@nithyananda.org"><div style="color:#d94103"><i class="fa fa-envelope"></i></div></a>'
  					}
  				]
			}
    ]
});
