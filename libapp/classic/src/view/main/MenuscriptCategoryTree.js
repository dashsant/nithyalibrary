/**
 * This example shows simple checkbox selection in a tree. It is enabled on leaf nodes by
 * simply setting `checked: true/false` at the node level.
 *
 * This example also shows loading an entire tree structure statically in one load call,
 * rather than loading each node asynchronously.
 *
 * The beforecheckchange event is used to veto the taking of a nap.
 */
Ext.define('library.view.main.MenuscriptCategoryTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'menuscript-cat-tree',
	requires: [
        'library.store.FilterTreeData'
    ],
	controller:'main',
    store:Ext.create('library.store.MenuscriptCategoryTreeStore'),
    rootVisible: false,
    useArrows: true,
	flex:1,
	height:'100%',
	border:false,
	forceFit:true,
	rowLines:true,
	columns: [
		{
			xtype: 'treecolumn',
			dataIndex: 'text',
			width:300,
			renderer: function (value, matadata, record, rowIndex , colIndex, store, view) {
				var viewModel = Ext.getCmp('app-main').getViewModel();
/*				filterTreeData = viewModel.data.filterTree;
				if(filterTreeData.hasOwnProperty(record.id)){
					var c = filterTreeData[record.id];
					console.log(value + " ("+ c +")");
					var b = "<b>" + value + " ("+ c +")" + "</b>"
					return b;
				}
*/
				return value;
			}
		}
	],
	listeners:{
		itemclick: function( me, record, item, index, e, eOpts )
		{
			var p ={
				q:record.id
			}
			

			var s = Ext.getCmp('menuscript-category-result-grid').getStore();
			if(typeof(Ext.getCmp('menuscript-pagingtoolbar-id')) != 'undefined')
				console.log(Ext.getCmp('menuscript-pagingtoolbar-id').getData());
			s.getProxy().setExtraParams(p);
			s.load({
					params: {
						start: 0,
						limit: 25
					}
				});
					
			
	
		}
	}

});
