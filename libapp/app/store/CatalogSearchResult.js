

Ext.define('library.store.CatalogSearchResult', {
    extend: 'Ext.data.Store',

    alias: 'store.searchresultstore',
	storeId:'searchresultstore_id',
	model:'library.model.CatalogDetail',
    //pageSize: 10,
    proxy: {
        type: 'memory',
        //enablePaging: true,
        reader: {
            type: 'json',
			rootProperty:'items'
        }
    }
});
