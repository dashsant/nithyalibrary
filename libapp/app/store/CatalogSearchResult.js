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
		url:'/api/librrary/filter',
		paramsAsJson:true,
		actionMethods:{
		    	create: 'POST',
    			read: 'POST',
    			update: 'POST',
    			destroy: 'POST'
		},
		reader:{
			type:'json',
			rootProperty: 'items',
      			totalProperty: 'total'
		},
		/*extraParams:
		{
  			searchText:"Agnimukhaprayogap"
		}*/
	}
});
/*searchresult.load({
      params:{
          start:0,
          limit: 2
      }
  });*/
