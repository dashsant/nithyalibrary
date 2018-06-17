
Ext.define('library.view.main.CatalogMain', {
    extend: 'Ext.tab.Panel',
    xtype: 'catalogmain',
	layout:{type:'hbox', align:'fit'},
	shrinkWrap:false,
	flex:1,
	width:'100%',
	height:'83%',
	style: 'color:#fff;font-weight: bold;',
    bodyPadding: 5,
    requires: [
        'library.view.main.CatalogEntryForm',
		'library.view.main.MainController'
	],	
	controller:'main',
	items:[
		{
			xtype: 'catalogentryform',
			itemId:'catalogreviewid',
			margin: '5 5 5 0',
			title:'Review',
			id:'catalogreviewid'
		},
		{
			xtype: 'catalogentryform',
			itemId:'catalogapproveid',
			margin: '5 5 5 0',
			title:'Approve',
			id:'catalogapproveid',
		}		
	]
});