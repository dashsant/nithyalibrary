Ext.define('library.view.main.ApproveGrid', {
	extend: 'Ext.grid.Panel',
	xtype:'approvegrid',
	/*layout:{ align:'fit'},*/
	shrinkWrap:false,
	flex:1,
	width:'100%',
	height:'83%',
	//hideHeaders:true,
	store: 'approvecatalogstore',
	requires: [
		'library.store.ApproveCatalogStore'
	],	
	columns: [
	   { text: 'Title',  dataIndex: 'title'
	   }
	],
	bbar: {
		xtype: 'pagingtoolbar',
		id: 'approvegrid-pagingtoolbar-id'
	}
});
