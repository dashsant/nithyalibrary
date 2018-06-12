Ext.define('library.store.UploadStore', {
    extend: 'Ext.data.Store',
    alias: 'store.uploadstore',
	model:'library.model.UploadDetail',
	pageSize:500,
    proxy: {
        type: 'ajax',
		url:'/api/library/upload',
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