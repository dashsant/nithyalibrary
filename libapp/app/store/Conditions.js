Ext.define('library.store.Conditions', {
    extend: 'Ext.data.Store',

    alias: 'store.Conditions',

    fields: [
        'id', 'label'
    ],
	autoLoad : true,
	autoSync : true,
    proxy: {
        type: 'ajax',
		url: 'resources/conditions.json',
		
        reader : {
			type         : 'json',
			rootProperty : 'data'
        },
		headers: { 
			'Content-Type': 'application/json' 
		},
		noCache: false,
		rootProperty: 'data'
    }
});
