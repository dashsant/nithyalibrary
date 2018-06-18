Ext.define('library.model.ApproveCatalogModel', {
    extend: 'Ext.data.Model',
    fields: [
        /*{name: 'title',  type: 'auto'},
        {name: 'subject',   type: 'auto'},
        {name: 'script', type: 'auto'},
        {name: 'url', type: 'auto'}*/
		
		{name: 'identifier',  type: 'string'},
        {name: 'type',  type: 'string'},
		{name: 'url',  type: 'string'},
		{name: 'title',  type: 'string'}
		
		/*category:"",
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
		manuscript_remarks:""*/
    ]

});