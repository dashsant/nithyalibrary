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
	rejectHandler:function(){
		var me = this;
		var viewModel = Ext.getCmp('catalogentryformId').getViewModel();
		var param = viewModel.data;
		Ext.Msg.confirm("Reject", "Are you sure you want to reject this article?", function(id, v , o){
			if(id == "yes"){
				Ext.Ajax.request({
				  url : '/api/library/review/reject',
				  params  : viewModel.data,
				  method: 'POST',
				  scope:this,
				  success : function(response){			
					   me.assignForReview();
				  },
				  failure: function() {
					 Ext.Msg.alert('Failed', "Failed to save");
				  }
				});
			}
		});
	},
	
	saveHandler:function(){
		var viewModel = Ext.getCmp('catalogentryformId').getViewModel();
		var param = viewModel.data;
		param.reviewStatus = "Reviewed";
		var loginViewModel = Ext.getCmp('loginFormId').getViewModel();
		param.reviewedBy = loginViewModel.reviewer;


		Ext.Ajax.request({
		  url : '/api/library/review/save',
		  params  : param,
		  method: 'POST',
		  scope:this,
		  success : function(response){			
			   this.assignForReview();
			   Ext.getCmp('admincard').getLayout().setActiveItem('card-2'); 
		  },
		  failure: function(form, action) {
			 Ext.Msg.alert('Failed', action.result.msg);
		  }
		});
		
	},
	loginHandler: function() {
		var form = Ext.getCmp('loginFormId').getForm();
		var viewModel = Ext.getCmp('loginFormId').getViewModel();
		if (form.isValid()) {
			Ext.Ajax.request({
			  url : '/login',
			  params  : {reviewer: viewModel.data.reviewer, password:viewModel.data.password},
			  method: 'POST',
			  scope:this,
			  success : function(response){	
				   var jsonObj = Ext.JSON.decode(response.responseText);
				   if(jsonObj.success){
						//this.assignForReview();
						Ext.getCmp('admincard').getLayout().setActiveItem('card-2'); 
				   }
				   else{
					   Ext.Msg.alert('Failed', "Invalid Username/Password");
				   }
			  },
			  failure: function(form, action) {
				 Ext.Msg.alert('Failed', action.result.msg);
			  }
			});
		}		
	},
	assignForReview:function()
	{
		var form = Ext.getCmp('loginFormId').getForm();
		var viewModel = Ext.getCmp('loginFormId').getViewModel();
		var p = {};
		p.reviewer = viewModel.data.reviewer;
		console.log("assignForReview");
		Ext.Ajax.request({
		  url : '/api/library/review/assign',
		  params  : p,
		  method: 'POST',
		  success : function(response){
			var jsonObj = Ext.JSON.decode(response.responseText);
			var viewModel = Ext.getCmp('catalogentryformId').getViewModel();
			viewModel.reset();
			viewModel.set("url","https://archive.org/details/" + jsonObj._id);
			viewModel.set("identifier",jsonObj.identifier);
			console.log(jsonObj.title);
			viewModel.set("title",jsonObj.title);
		  },
		  failure: function(response , opts) {
			  console.log(response);
		  }
		});		
	}
	
});
