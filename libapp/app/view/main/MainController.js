/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('library.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
	onSearchTextClick:function(){
		Ext.Ajax.request({
		  url : '/api/librrary/filter',
		  params  : {
			searchText: Ext.getCmp('searchText').getValue()
		  },
		  method: 'POST',
		  success : function(response){
				var itemsObj = Ext.JSON.decode(response.responseText).items;

				var finalArr = [];
				for (var i = 0; i < itemsObj.length; i++) {
				  var arr =[];
				  arr.push(itemsObj[i].title);
				  arr.push(itemsObj[i].subject);
				  arr.push(itemsObj[i].script);
				  arr.push(itemsObj[i].url);
				  finalArr.push(arr);
			  }
			  //loading store data
			  var s = Ext.getCmp('result-grid-id').getStore();
			  s.getProxy().setData(finalArr);
			  s.load();
			  // loading data into MainModel
			  var viewModel = Ext.getCmp('app-main').getViewModel();
			  var sText = Ext.getCmp('searchText').getValue();
			  var totalMatched = Ext.JSON.decode(response.responseText).totalMatched;
			  var totalReturned = Ext.JSON.decode(response.responseText).totalReturned;

			  viewModel.bind({
				searchString: sText,
				resultMatched: totalMatched,
				resultReturned: totalReturned,
				deep: true
			},function(data){viewModel.setData(data);});
			var h;
			if(totalMatched == totalReturned )
				h = '<h2>' + totalReturned +' Matches Found For ' + sText +'</h2>';
			else
				h = '<h2> More than 500 ' +' Matches Found For ' + sText +'</h2>';
			Ext.getCmp('searchLabel-id').setHtml(h);
		  }
		});
		Ext.getCmp('bottomCardPanel').setActiveItem(1);
	},	
	onApplyFilterClick:function(){
		console.log("onApplyFilterClick");
		var catFil = [];
		var scriptFil = [];
		var selectedScripts = Ext.getCmp('filter-tree-id').getChecked();

		for(var i=0;i<selectedScripts.length;i++)
		{
			var data = selectedScripts[i].getData();
			if(data.parentId !== 'Script') catFil.push(data.text);
			else scriptFil.push(data.text);
		}
		Ext.Ajax.request({
		   url : '/api/librrary/filter',
		   params  : {
			 searchText: Ext.getCmp('searchText').getValue(),
			 'catFilter[]': catFil,
			 'scriptFilter[]': scriptFil
		   },
		   method: 'POST',
		   success : function(response){
							var itemsObj = Ext.JSON.decode(response.responseText).items;

							var finalArr = [];
							for (var i = 0; i < itemsObj.length; i++) {
							  var arr =[];
							  arr.push(itemsObj[i].title);
							  arr.push(itemsObj[i].subject);
							  arr.push(itemsObj[i].script);
							  arr.push(itemsObj[i].url);
							  finalArr.push(arr);
						  }
						  //loading store data
						  var s = Ext.getCmp('result-grid-id').getStore();
						  s.getProxy().setData(finalArr);
						  s.load();
						  // loading data into MainModel
						  var viewModel = Ext.getCmp('app-main').getViewModel();
						  var sText = Ext.getCmp('searchText').getValue();
						  var totalMatched = Ext.JSON.decode(response.responseText).totalMatched;
						  var totalReturned = Ext.JSON.decode(response.responseText).totalReturned;

						  viewModel.bind({
							searchString: sText,
							resultMatched: totalMatched,
							resultReturned: totalReturned,
							deep: true
						},function(data){viewModel.setData(data);});
						var h;
						if(totalMatched > totalReturned )
							h = '<h2>' + totalReturned +' Matches Found For ' + sText +'</h2>';
						else
							h = '<h2> More than 500 ' +' Matches Found For ' + sText +'</h2>';
						Ext.getCmp('searchLabel-id').setHtml(h);
		   }
		 });
 	}
});
