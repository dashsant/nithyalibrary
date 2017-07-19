Ext.define('library.store.CatalogSearchResult', {
    extend: 'Ext.data.Store',

    alias: 'store.searchresultstore',
	storeId:'searchresultstore_id',

    fields: [
        'title', 'subject', 'script','url'
    ],

	proxy:{
		type:'ajax',
		url:'/resources/test_result_data.json',
		reader:{
			type:'json',
			rootProperty: 'items'
		},
		extraParams:{
			searchString:""
		}
	}
});