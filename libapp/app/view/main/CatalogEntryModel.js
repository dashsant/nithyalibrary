/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('library.view.main.CatalogEntryModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.catalog',
    id: 'catalogentryid',
    data: {
		identifier:"",
        type: 0,
		url:"",
		title:"",
		category:"",
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
		manuscript_script:"",
		manuscript_material:"",
		manuscript_scribe:"",
		manuscript_subject:"",
		manuscript_institute:"",
		manuscript_address:"",
		manuscript_foliosinbundle:"",
		manuscript_condition:"",
		manuscript_foliosintext:"",
		manuscript_textrange:"",
		manuscript_lines:0,
		manuscript_length:0,
		manuscript_width:0,
		manuscript_beginningline:0,
		manuscript_endingline:0,
		manuscript_notes:"",
		manuscript_remarks:""
		
		
    },
    formulas: {
        // We'll explain formulas in more detail soon.
        sourceUrlHtml: function (get) {
            var url = get('url');
			var title = get('title');
            return "<a href='" + url + "' target='_blank'>" + title + "</a>";
        }
    }
});

