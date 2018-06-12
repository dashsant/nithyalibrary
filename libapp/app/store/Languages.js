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
			'Accept' : 'application/json',
			'Content-Type': 'application/json; charset=utf-8'
		},
		noCache: false,
		rootProperty: 'data'
    }
});
