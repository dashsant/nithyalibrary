/**
 * This example shows simple checkbox selection in a tree. It is enabled on leaf nodes by
 * simply setting `checked: true/false` at the node level.
 *
 * This example also shows loading an entire tree structure statically in one load call,
 * rather than loading each node asynchronously.
 *
 * The beforecheckchange event is used to veto the taking of a nap.
 */
Ext.define('library.view.main.FilterTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'filter-tree',
	requires: [
        'library.store.FilterTreeData'
    ],
	controller:'main',
    store:Ext.create('library.store.FilterTreeData'),
    rootVisible: false,
    useArrows: true,
    width:320,
	height:400 ,
	bodyStyle: {border:0},
	columns: [
		{
			xtype: 'treecolumn',
			dataIndex: 'text',
			width:300,
			renderer: function (value, matadata, record, rowIndex , colIndex, store, view) {
				return value;
			}
		}
	],
	bbar: [
		{ 
			xtype: 'button', 
			text: 'Apply Filter',
			handler: 'onApplyFilterClick' 
		}
	],
	listeners:{
			checkchange : function(node, checked) {
			var that = this;
			if (!node.get('leaf')) node.cascadeBy(function (n) { n.set('checked', checked); });
			node = node.parentNode;
			var siblingStateEqual = true;
			while (node != null && node.get('id') != 'root') {
				node.cascadeBy(function (n)
				{
					if (n != node) {
						if (n.get('checked') != checked) {
							siblingStateEqual = false;
						}
					}
				});
				if (siblingStateEqual == checked) node.set('checked', checked);
				node = node.parentNode;
			};
		}
	}	

});
