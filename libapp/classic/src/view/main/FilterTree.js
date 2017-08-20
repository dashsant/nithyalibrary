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

    store:Ext.create('library.store.FilterTreeData'),
    rootVisible: false,
    useArrows: true,
    //width: 280,
    width:320,
	height: 350,
	border:false,
	bodyStyle: {border:0},
		columns: [{
		xtype: 'treecolumn',
		dataIndex: 'text',
		width:300,
		renderer: function (value, matadata, record, rowIndex , colIndex, store, view) {
		
		return value;
     }
		
		
	}]

});
