/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('library.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    id: 'main-model-id',
    data: {
        name: 'library',
		resultMatched: '',
		resultReturned: '',
		searchString:'',
    },
    stores: {
        searchresult: {
            type: 'searchresultstore',
            autoLoad: false
        }
    }

});
