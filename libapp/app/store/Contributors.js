Ext.define('library.store.Contributors', {
    extend: 'Ext.data.Store',

    alias: 'store.contributors',

    fields: [
        'id', 'label'
    ],
	autoLoad : true,
	autoSync : true,
    proxy: {
        type: 'ajax',
		url: 'resources/contributors.json',
		
        reader : {
			type         : 'json',
			rootProperty : 'data'
        },
		headers: { 
			'Content-Type': 'application/json; charset=UTF-8' 
		},
		noCache: false,
		rootProperty: 'data'
    }
});
