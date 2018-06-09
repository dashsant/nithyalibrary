Ext.define('library.view.main.AdminForms', {
	extend: 'Ext.panel.Panel',
    xtype: 'adminforms',
	id: 'admincard',
	layout:'card',
    requires: [
		'library.view.main.LoginForm',
		'library.view.main.CatalogMain'
    ],
	shrinkWrap:false,
	flex:1,
	width:'100%',
	height:'95%',
	items: [
		{ xtype:'loginform', itemId:'card-1', width:'100%', height:'100%', layout:{type:'vbox',align:'center', pack:'center'} },
        { xtype:'catalogmain', itemId:'card-2', width:'100%', height:'100%' }
    ],
	activeTab: 0
});