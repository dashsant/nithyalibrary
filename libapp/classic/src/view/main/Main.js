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
	scrollable:false,
	//autoScroll:true,
	height:'98%',
	width:'100%',
    requires: [
        'Ext.window.MessageBox',
		'Ext.tab.Panel',
        'library.view.main.MainController',
        'library.view.main.MainModel',
        'library.view.main.List',
		'library.view.main.LibraryHome'
    ],
	viewModel: 'main',
	controller:'main',
	bodyStyle:"",
    layout: 'vbox',
    items: [{
			xtype:'container',
			layout:'hbox',
			style: 'background-color:rgb(141, 67, 54);font-size:12;color:#fff;font-weight: 400;',
			height:40,
			width:'100%',
			items:[
			{
				xtype:'component',
				html: "<p style=\"text-indent: 2em;margin-top:10px;letter-spacing: 2px;\"><q><i>If you want to retain anything in life, renounce the fear of losing it.</i></q><b>-- H. H. Paramahamsa Nithyananda</p></b> ",
				padding: '-2 20 15 20' // Same as CSS ordering (top, right, bottom, left)
			}
			]
		},
		{
			xtype:'panel',
			layout:{
				type: 'hbox',
				align: 'top'
			},
			margin: '30 0 0 5',
			defaultButton:'btnSearch',
			referenceHolder: true,
			items:
			[
			
				/*{
					margin: '30 25 5 5',
					xtype: 'container',
					width:'225px',
					html:"<img src=\"/resources/Nithyananda-Digital-Library-text.png\" width='184px' height='74px'>"
				},*/
				{
					xtype:'image',
					src:"/resources/Hinduism now scriptures.png",
					width:'225px',
					height:'90px'
				},			
				{
					xtype: 'textfield',
					width:350,
					margin: '20 0 0 170',
					name: 'searchText',
					id: 'searchText',
					emptyText: 'Type to search'
				},
				{
					xtype: 'button',
					margin:'20 0 0 0',
					reference: 'btnSearch',
					height:32,
					text:'Search',
					width:78,
					padding:0,
					border:false,
					style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;text-indent:2px',
					//icon:'/resources/search-32.png',
					name: 'btnSearch',
					handler : 'onSearchTextClick',  // no scope given here
					iconCls: 'x-fa fa-search'
				},
				{ 
					margin: '-10 15 0 370',
					xtype: 'image',
					src:"/resources/Nithyananda University only logo.png",
					width:'165px',
					height:'165px'
				},
			]
		},
		{
			xtype:'libraryhome',
			id:'libraryhomePage',
			height:'99%'
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
