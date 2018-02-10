

Ext.define('library.store.CatalogSearchResult', {
    extend: 'Ext.data.Store',
    alias: 'store.searchresultstore',
	storeId:'searchresultstore_id',
	model:'library.model.CatalogDetail',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
			rootProperty:'items'
        }
    }
});
