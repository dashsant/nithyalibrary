
Ext.define('library.store.FilterTreeData', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.filter',

	
    proxy: {
        type: 'ajax',
		url:'/resources/tree_data.json',
		reader: {
            type: 'json'
			
		},
		extraParams:{
			searchString:""
		}		
    }
});

