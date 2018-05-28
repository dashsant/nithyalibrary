/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
 
Ext.define('library.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Nithyanand Digital Library',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
		/*
		Ext.Ajax.request({
		  url : '/api/librrary/msagg',
		  method: 'POST',
		  success : function(response){
			var jsonObj = Ext.JSON.decode(response.responseText)
			var itemsObj = jsonObj.catstats;
			
		  }
		});
		*/
    },

    onAppUpdate: function () {

    }
});
