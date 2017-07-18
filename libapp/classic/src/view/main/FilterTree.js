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
    flex:1,
	height: '100%',
	border:false,
	bodyStyle: {border:0}

});