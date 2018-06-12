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
			var applyFilterBtn = Ext.getCmp('apply-filter-btn');

			var h;
			if(totalMatched == totalReturned )
				h = '<h3>' + totalReturned +' Matches Found For ' + sText +'</h3>';
			else
				h = '<h3> More than 500 ' +' Matches Found For ' + sText +'</h3>';
			Ext.getCmp('searchLabel-id').setHtml(h);
			Ext.getCmp('filter-tree-id').getStore().load();
			//loading store data
			var s = Ext.getCmp('result-grid-id').getStore();
			s.loadData(itemsObj,false);
			applyFilterBtn.setHidden(false);
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
 	},
	loginSubmitHandler: function() {
		var form = Ext.getCmp('loginFormId').getForm();
		if (form.isValid()) {
			form.submit({
				success: function(form, action) {
				   Ext.getCmp('admincard').getLayout().setActiveItem('card-2'); 
				},
				failure: function(form, action) {
					Ext.Msg.alert('Failed', action.result.msg);
				}
			});
		}
	},
	loginResetHandler: function() {
		Ext.getCmp('loginFormId').getForm().reset();
	},
	refreshGridHandler: function(){
		console.log('Refresh grid');
	},
	rejectBookHandler: function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
		Ext.Msg.confirm(
			'Delete Book',
			'Are you sure you want to delete the book <strong>"' + rec.get('roman_script_title') + '"</strong><br> ' + rec.get('source_url') + '?',
			this.doRemoveBook.bind(this, rec)
        );
	},
    doRemoveBook: function (record, btn) {
        if (btn === 'yes') {
			console.log('Reject Book, Yes: ' + record.get('roman_script_title'));
            //var store = this.getStore('mystore');
            //store.remove(record);
        }
    }
});
