/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('library.view.main.CatalogViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.catalogmanuscript',
    id: 'catalog-model-id',
    data: {
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
            return "<a href='" + url + "' target='_blank'>" + "Preview URL" + "</a>";
        }
    }
});

