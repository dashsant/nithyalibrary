Ext.define('library.store.MenuscriptCategoryStore', {
    extend: 'Ext.data.Store',
    alias: 'store.menuscriptcategorystore',
	model:'library.model.CatalogDetail',
	pageSize:25,
    proxy: {
        type: 'ajax',
		url:'/api/librrary/scripture/by_category',
		reader: {
            type: 'json',
			rootProperty: 'items',
            totalProperty: 'total'
			
		},
		extraParams:{
			searchString:""
		},
		actionMethods:{
			create: 'POST',
			read: 'POST',
			update: 'POST',
			destroy: 'POST'
		},
		headers: { 
			'Content-Type': 'application/json' 
		},
		noCache: true,
		paramsAsJson:true		
    }
});