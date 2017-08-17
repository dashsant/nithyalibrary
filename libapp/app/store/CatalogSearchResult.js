Ext.define('library.store.CatalogSearchResult', {
    extend: 'Ext.data.Store',

    alias: 'store.searchresultstore',
	storeId:'searchresultstore_id',
  fields: [
    'title', 'subject', 'script','url'
      //'id', 'script', 'subject', 'title', 'url'
  ],
    pageSize: 10,

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'array'
        }
    }
});
