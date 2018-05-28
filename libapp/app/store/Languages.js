Ext.define('library.store.Languages', {
    extend: 'Ext.data.Store',

    alias: 'store.languages',

    fields: [
        'id', 'label'
    ],
	autoLoad : true,
	autoSync : true,
    proxy: {
        type: 'ajax',
		url: 'resources/languages.json',
		
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
