

Ext.define('library.store.ApproveCatalogStore', {
    extend: 'Ext.data.Store',
    alias: 'store.approvecatalogstore',
	model:'library.model.ApproveCatalogModel',
	autoLoad: false,
    proxy: {
        type: 'ajax',
		url:'/api/library/approve/fetch',
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
