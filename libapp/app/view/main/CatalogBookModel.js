/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('library.view.main.CatalogBookModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.catalogbook',
    id: 'catalogboookmodelid',
    data: {
		author1:"",
		contributor1:"",
		author2:"",
		contributor2:"",
		author3:"",
		contributor3:"",
		author4:"",
		contributor4:"",
		publisher:"",
		published_on:"",
		numpages:"",
		description:"",
		metadata:"",
		isbn:"",
		copyright:"",
		languages:"",
		edition:"",
		price:0,
		
    },
    formulas: {
        // We'll explain formulas in more detail soon.
        sourceUrlHtml: function (get) {
            var url = get('url');
            return "<a href='" + url + "' target='_blank'>" + "Preview URL" + "</a>";
        }
    }
});

