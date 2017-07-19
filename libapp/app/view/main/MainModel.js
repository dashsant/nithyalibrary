/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('library.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'library',
		resultCount:4,
		searchString:'Ramayan',
    },
    stores: {
        searchresult: {
            type: 'searchresultstore',
            autoLoad: false
        }
    }
	
});
