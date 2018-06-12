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
	border:false,
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
	bodyStyle:{
		backgroundImage:'url(/resources/Background.png) !important',
		backgroundRepeat: 'no-repeat !important',
		backgroundSize:'cover !important',
		margin: '0  !important',
		padding: '0 !important',
		border: '0 important',
		borderWidth: 0
	},
    layout: 'border',
    items: [
		{
			xtype: 'container',
			region: 'north',
			width: '100%',
			layout: {
				type:'table',
				//align: 'start',
				//pack: 'start',
				columns:3
			},
			items: [
				{
					colspan: 2,
					tableAttrs: {
						style: {
							width: '300px'
						}
					},
					layout: {align: 'start', pack: 'start'},
					html: '<span class="quoteCls"><q><i>If you want to retain anything in life, renounce the fear of losing it.</i></q><b>-- H. H. Paramahamsa Nithyananda</b></span>'
				},
				{
					colspan: 1,
					rowspan: 2,
					//cls: 'positionRelative 50-50',
					//layout: {type: 'container', align:'center', pack:'center'},
					html:'<img class="absoluteCenter" src="resources/Nithyananda University only logo.png">'
				},
				{
					colspan: 1,
					rowspan: 1,
					tableAttrs: {
						style: {
							width: '40%',
							marginLeft: '40px',
							height: 250
						}
					},
					layout: {align:'fit', pack:'center'},
					cls: 'productlogo',
					html: '<div style="display:block;">&nbsp;</div>'
				},
				{
					tableAttrs: {
						style: {
							width: '60%',
							height: 150
						}
					},
					html: ''
				}
			]
		},
		{
			title: 'header',
			layout: {type:'vbox',align:'start', pack:'center'},
			xtype: 'component',
			region: 'north',
			header: false,
			html: '<span style="margin-left:15px"><q><i>If you want to retain anything in life, renounce the fear of losing it.</i></q><b>-- H. H. Paramahamsa Nithyananda</b></span>',
			cls: 'topWide'
		},
		{
			title: 'header',
			layout:{type:'hbox', align:'fit'},
			xtype:'container',
			region: 'north',
			height: '17%',
			header: false,
			items:[
				{xtype:'component',width:'30%',height:'70%',cls:'productlogo',html:'&nbsp;'},
				{xtype:'container',width:'40%',height:'80%',defaultButton:'btnSearch',
				 referenceHolder: true,
				 layout:{type:'hbox',align:'middle',pack:'center'},
				 items:[
					 { xtype: 'textfield', emptyText: 'Type to search', flex:3,name: 'searchText',
					 id: 'searchText'},
					 {
					   xtype: 'button',text:'Search',iconCls: 'x-fa fa-search',padding:'0 5',
					   border:false,height:'32px',flex:1,name: 'btnSearch',
					   handler : 'onSearchTextClick', // no scope given here
					   style: 'min-width:25px;background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;text-indent:2px'
					 }
				 ]
				},
				{xtype:'component',width:'30%',height:'100%',cls:'swamijilogo',html:'&nbsp;'}
			]
		},		
		{
			title: 'footer',
			xtype: 'component',
			region: 'south',
			header: false,
			minHeight: 19,
			layout: {
				type: 'hbox', align:'center',pack:'center'
			},
			html: '<div style="text-align:center">Copyright © 2018 Nithyananda University Press ' +
			'<a href="https://www.facebook.com/nithyanandauniversitypress">'+
			'<img src="resources/facebook.svg" style="display:inline-block;width:28px !important;height:28px !important;margin-right:15px;position:relative;top:8px;">'+
			'</a>'+

			'<a href="http://twitter.com/SriNithyananda">'+
			'<img src="resources/twitter.svg" style="display:inline-block;width:18px !important;height:18px !important;margin-right:15px;position:relative;top:4px;">'+
			'</a>'+

			'<a href="http://www.youtube.com/nithyanandatv">'+
			'<img src="resources/youtube.svg" style="display:inline-block;width:28px !important;height:28px !important;position:relative;top:8px;margin-right:15px;">'+
			'</a>'+

			'<a href="mailto:enpublishers@nithyananda.org">'+
			'<i class="fa fa-envelope" style="color:#d94103;font-size:16px !important;position:relative;top:-1px"></i>'+
			'</a>'+

			'</div>',
			style:{
				color: 'white',background:'transparent', 'font-weight': '700'
			}
		},

		/*{
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
				{
					xtype:'image',
					margin:'10 0 0 0',
					src:"/resources/Hinduism now scriptures.png",
					width:'225px',
					height:'90px'
				},			
				{
					xtype: 'textfield',
					width:350,
					margin: '20 0 0 220',
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
					name: 'btnSearch',
					handler : 'onSearchTextClick',  // no scope given here
					iconCls: 'x-fa fa-search'
				},
				{ 
					margin: '-10 15 0 330',
					xtype: 'image',
					src:"/resources/Nithyananda University only logo.png",
					width:'155px',
					height:'155px'
				},
			]
		},*/

		{
			title: 'contentArea',
			layout:{type:'hbox', align:'fit'},
			xtype: 'container',
			region: 'center',
			header: false,
			cls:'bodyclass',
			height:'82%',
			margin:'0 15 0 15',
			items:[
				{
					xtype:'libraryhome',
					id:'libraryhomePage',
					flex:1
				}
			],
			style:{
				color: 'white',
			}
		},	
	]
});
