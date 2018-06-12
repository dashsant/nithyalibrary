Ext.define('library.store.Materials', {
    extend: 'Ext.data.Store',

    alias: 'store.materials',

    fields: [
        'id', 'label'
    ],
	autoLoad : true,
	autoSync : true,
    proxy: {
        type: 'ajax',
		url: 'resources/materials.json',
		
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
