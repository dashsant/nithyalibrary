Ext.define('library.store.CatalogSearchResult', {
    extend: 'Ext.data.Store',

    alias: 'store.searchresultstore',
	storeId:'searchresultstore_id',
	fields: [
    'title', 'subject', 'script','url'
	],
    pageSize: 10,
	data:{
			items:[]
		},
    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json',
			rootProperty:'items'
        }
    }
});
