/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('library.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
	getSearchResult:function(p)
	{
		Ext.getCmp('libraryhomePage').setActiveItem(5);
		Ext.Ajax.request({
		  url : '/api/librrary/filter',
		  params  : p,
		  method: 'POST',
		  success : function(response){
			
			var jsonObj = Ext.JSON.decode(response.responseText)
			var itemsObj = jsonObj.items;
			var viewModel = Ext.getCmp('app-main').getViewModel();
			viewModel.data.filterTree = jsonObj.filterTree


			//console.log(itemsObj);
			//Ext.getCmp('searchresult-id').refresh();
			// loading data into MainModel
			var viewModel = Ext.getCmp('app-main').getViewModel();
			var sText = Ext.getCmp('searchText').getValue();
			var totalMatched = jsonObj.totalMatched;
			var totalReturned = jsonObj.totalReturned;

			var h;
			if(totalMatched == totalReturned )
				h = '<h2>' + totalReturned +' Matches Found For ' + sText +'</h2>';
			else
				h = '<h2> More than 500 ' +' Matches Found For ' + sText +'</h2>';
			Ext.getCmp('searchLabel-id').setHtml(h);
			Ext.getCmp('filter-tree-id').getStore().load();
			//loading store data
			var s = Ext.getCmp('result-grid-id').getStore();
			s.loadData(itemsObj,false);
			
		  }
		});		
	},
	onSearchTextClick:function(){
		console.log(this);
		var v =  Ext.getCmp('searchText').getValue().trim();
		if(v.length == 0)
			return;
		var p = { searchText: v }
		this.getSearchResult(p);
	},	
	onApplyFilterClick:function(){
		console.log("onApplyFilterClick");
		var catFil = [];
		var scriptFil = [];
		var selectedItems = Ext.getCmp('filter-tree-id').getChecked();

		for(var i=0;i<selectedItems.length;i++)
		{
			var data = selectedItems[i].getData();
			if(data.parentId !== 'Script') 
				catFil.push(data.id);
		}
		var p = {
			 searchText: Ext.getCmp('searchText').getValue(),
			 'catFilter[]': catFil,
			 'scriptFilter[]': scriptFil
		   };
		this.getSearchResult(p);
 	}
});
