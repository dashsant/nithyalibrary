Ext.define('library.store.BookStore', {
    extend: 'Ext.data.Store',
    alias: 'store.bookstore',
	model:'library.model.BookDetail',
	pageSize:500,
    proxy: {
        type: 'ajax',
		url:'/api/librrary/book/all',
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