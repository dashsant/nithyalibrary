Ext.define('library.view.main.UploadGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'uploadgrid',

    requires: [
        'library.store.UploadStore',
		'library.view.main.MainController'
    ],

    store: {
        type: 'uploadstore'
    },
	controller:'main',
    columns: [
        { text: 'URL',  dataIndex: 'url' },
        { text: 'Review Status', dataIndex: 'status', flex: 1 }
    ]/*,

    listeners: {
        select: 'onItemSelected'
    }*/
});
