
Ext.define('library.store.MenuscriptCategoryTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menuscriptcategory',

	
    proxy: {
        type: 'ajax',
		url:'/resources/ms_cat_tree_no_chk.json',
		reader: {
            type: 'json'
			
		},
		extraParams:{
			searchString:""
		}		
    }
});