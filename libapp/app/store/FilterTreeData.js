var data = [{
    "text": "Script", 
	"iconCls":"filter-tree-icon",
    "children": [
	{
        "text": "Devanaagari",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    },
	{
        "text": "Grantha",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    },
	{
        "text": "Telugu",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    },
	{
        "text": "Roman",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    },
	{
        "text": "Tamil",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    }	
	]
},
{
    "text": "Subject",
	"iconCls":"filter-tree-icon",
    "children": [{
        "text": "Vyaakarana",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    },{
        "text": "Puraana",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    },
	{
        "text": "Raamaayana",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    },
	{
        "text": "Smrti",
        "leaf": true,
		"iconCls":"filter-tree-icon",
        "checked": false
    }
	]
	
}
];

Ext.define('library.store.FilterTreeData', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.filter',

	
    proxy: {
		data:data,
        type: 'memory',
		reader: {
            type: 'json',
			
		}
    }
});