/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('library.view.main.CatalogEntryModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.catalog',
    id: 'catalogentryid',
	reset:function(){
		this.set("identifier","");
        this.set("type", 0);
		this.set("url","");
		this.set("title","");
		this.set("category","");
		this.set("author1","");
		this.set("contributor1","");
		this.set("author2","");
		this.set("contributor2","");
		this.set("author3","");
		this.set("contributor3","");
		this.set("author4","");
		this.set("contributor4","");
		this.set("publisher","");
		this.set("published_on","");
		this.set("numpages","");
		this.set("description","");
		this.set("metadata","");
		this.set("isbn","");
		this.set("copyright","");
		this.set("languages","");
		this.set("edition","");
		this.set("price",0);
		this.set("manuscript_script","");
		this.set("manuscript_material","");
		this.set("manuscript_scribe","");
		this.set("manuscript_subject","");
		this.set("manuscript_institute","");
		this.set("manuscript_address","");
		this.set("manuscript_foliosinbundle","");
		this.set("manuscript_condition","");
		this.set("manuscript_foliosintext","");
		this.set("manuscript_textrange","");
		this.set("manuscript_lines", 0);
		this.set("manuscript_length" 0);
		this.set("manuscript_width" , 0);
		this.set("manuscript_beginningline" , 0);
		this.set("manuscript_endingline" , 0);
		this.set("manuscript_notes","");
		this.set("manuscript_remarks","");
		
		

	},
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
			var title = get('title').trim();
			if(title.length == 0){
				title = "Preview URL";
			}
            return "<a href='" + url + "' target='_blank'>" + title + "</a>";
        }
    }
});


