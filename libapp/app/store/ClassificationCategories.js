Ext.define('library.store.ClassificationCategories', {
    extend: 'Ext.data.Store',

    alias: 'store.classificationcategories',

    fields: [
        'id', 'group', 'label'
    ],
	autoLoad : true,
	autoSync : true,
    proxy: {
        type: 'ajax',
		url: 'resources/classificationcategories.json',
		
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
