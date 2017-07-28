Ext.define('library.store.CatalogSearchResult', {
    extend: 'Ext.data.Store',

    alias: 'store.searchresultstore',
	storeId:'searchresultstore_id',
  pageSize: 2,
    fields: [
        'title', 'subject', 'script','url'
    ],

	proxy:{
		type:'ajax',
		url:'/resources/test_result_data.json',
		reader:{
			type:'json',
			rootProperty: 'items',
      totalProperty: 'total'
		},
		extraParams:{
			searchString:""
		}
	}
});
/*searchresult.load({
      params:{
          start:0,
          limit: 2
      }
  });*/
