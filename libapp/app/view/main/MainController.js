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
		Ext.Ajax.request({
		  url : '/api/librrary/filter',
		  params  : p,
		  method: 'POST',
		  success : function(response){
			var jsonObj = Ext.JSON.decode(response.responseText)
			var itemsObj = jsonObj.items;
			var viewModel = Ext.getCmp('app-main').getViewModel();
			viewModel.data.filterTree = jsonObj.filterTree

			//loading store data
			var s = Ext.getCmp('result-grid-id').getStore();
			s.loadData(itemsObj,false);
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
			Ext.getCmp('bottomCardPanel').setActiveItem(1);
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
		//Ext.getCmp('bottomCardPanel').setActiveItem(1);
	},	
	onApplyFilterClick:function(){
		console.log("onApplyFilterClick");
		var catFil = [];
		var scriptFil = [];
		var selectedScripts = Ext.getCmp('filter-tree-id').getChecked();
		console.log(selectedScripts);

		for(var i=0;i<selectedScripts.length;i++)
		{
			var data = selectedScripts[i].getData();
			if(data.parentId !== 'Script') catFil.push(data.id);
			else scriptFil.push(data.id);
		}
		var p = {
			 searchText: Ext.getCmp('searchText').getValue(),
			 'catFilter[]': catFil,
			 'scriptFilter[]': scriptFil
		   };
		this.getSearchResult(p);
 	}
});
