

Ext.define('library.view.main.CatalogMenuscriptForm', {
    extend: 'Ext.form.Panel',
    xtype: 'catalog-menuscript-form',
	layout: {
		type:'vbox', 
		align: 'stretch'
		}, 
	id:'catalogmenuscriptformid',
	margin:0, 
	padding:0, 
	itemId:'manuscript-card', 
	width:'100%', 
	height:'100%',
	defaults:{
	 labelPad: 35
	},
	viewModel: 'catalog',	
	items: [
	{
	   xtype: 'textfield',
	   id: 'manuscript_script',
	   fieldLabel: 'Script',
	   bind: '{manuscript_script}'
	},
	{
	   xtype: 'combobox',
	   id: 'manuscript_material',
	   fieldLabel: 'Material',
	   queryMode: 'local',
	   valueField: 'value',
	   displayField: 'label',
	   typeAhead: true,
	   forceSelection: true,
	   filterPickList: true,
	   bind: '{manuscript_material}',
	   //plugins:[{
		//	ptype:'afterlabelinfo',
		//	qtip:'Refers to the substance or adharapatala that the manuscript is made of including ivory, palm leaf, birch-bark, wood, gold, silver, paper, tortoise shell, agaru-bark, sanchi-pat, tula-pat, etc'
	   //}]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_scribe',
	   fieldLabel: 'Scribe',
	   bind: '{manuscript_scribe}',
	   //plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:'This refers to the person who has written the copy of the manuscript'
	 //  }]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_subject',
	   fieldLabel: 'Subject',
	   bind: '{manuscript_subject}'
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_institute',
	   fieldLabel: 'Institute',
	   bind: '{manuscript_institute}'
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_address',
	   fieldLabel: 'Address',
	   bind: '{manuscript_address}',
	  // plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:'The complete postal address of the institution or individual that owns the manuscript'
	 //  }]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_foliosinbundle',
	   fieldLabel: 'Folios in Bundle',
	   bind: '{manuscript_foliosinbundle}',
	  // plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:'Refers to the number of the folios within a manuscript<br><ul><li>Blank folios should be included in the tally and noted in Remarks.</li><li>One folio is counted for both 1a and 1b (obverse and reverse) sides</li><li>Number of folios in a manuscript can be different from its pagination. <br>For instance, a manuscript may have folios numbered from 1 to 50 and if folios 4-8 are missing, then the number of folios in the manuscript is 45</li></ul>'
	//   }]
	},
	{
	   xtype: 'tagfield',
	   id: 'manuscript_condition',
	   fieldLabel: 'Condition',
	   displayField: 'label',
	   valueField: 'id',
	   store: Ext.create('library.store.Conditions',{autoLoad:true}),
	   queryMode: 'local',
	   filterPickList: false,
	   bind: '{manuscript_condition}',
	   //plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:"Refers to the condition of the manuscript—‘good', ‘bad', ‘ worm infected' ‘fungus', and ‘stuck folio ', ‘brittle'; ‘illustration/script illegible'"
	//   }]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_foliosintext',
	   fieldLabel: 'Folios in Text',
	   bind: '{manuscript_foliosintext}'
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_textrange',
	   fieldLabel: 'Text Range',
	   bind: '{manuscript_textrange}'
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_lines',
	   fieldLabel: 'Lines',
	   bind: '{manuscript_lines}'
	},
	{
		layout:{type:'hbox', align: 'stretch'},
		defaults:{
			labelPad: 35
		},
		items:[
			{
			   xtype: 'numberfield',
			   id: 'manuscript_length',
			   fieldLabel: 'Length',
			   hideTrigger: true,
			   allowDecimals: false,
			   allowExponential: false,
			   width: '50%',
			   bind: '{manuscript_length}',
			   //plugins:[{
			//		ptype:'afterlabelinfo',
			//		qtip:"Length, in centimeters"
			//   }]
			},
			{
			   xtype: 'numberfield',
			   id: 'manuscript_width',
			   fieldLabel: 'Width',
			   hideTrigger: true,
			   allowDecimals: false,
			   allowExponential: false,
			   width: '50%',
			   labelPad: 0,
			   bind: '{manuscript_width}',
			   //plugins:[{
			//		ptype:'afterlabelinfo',
			//		qtip:"Width, in centimeters"
			 //  }]
			}
		]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_beginningline',
	   fieldLabel: 'Begining Line',
	   bind: '{manuscript_beginningline}',
	  // plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:"The starting lines or some stanzas of the text.<br><ul><li>It should be written in Roman script with diacritical marks or in Devanagari.</li><li>The small texts of a Stotra may be noted. e.g.: Aum namo ganeśāya, namo arihantānam, siddham or any auspicious symbols or any mangala sloka of iṣṭadeva.</li><li>If the starting portion of first folio is missing, the starting text of the available portion may be noted.</li></ul>"
	 //  }]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_endingline',
	   fieldLabel: 'Ending Line',
	   bind: '{manuscript_endingline}',
	  // plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:"The ending lines or stanzas of the text before colophon"
	 //  }]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_notes',
	   fieldLabel: 'Notes/Content',
	   bind: '{manuscript_notes}',
	  // plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:"It is the anukramanika , the list of chapters and sections of the treatise including key words or phrases that describe the content of the resource"
	 //  }]
	},
	{
	   xtype: 'textfield',
	   id: 'manuscript_remarks',
	   fieldLabel: 'Remarks',
	   bind: '{manuscript_remarks}',
	 //  plugins:[{
	//		ptype:'afterlabelinfo',
	//		qtip:"<ul><li>The details of the manuscript, if it is available elsewhere.</li><li>If it is published or unpublished.</li><li>Material of the cover of the manuscript – ivory, skin, wood etc.</li><li>Whether there is anything written accompanying the text like notes</li><li>The cataloguer can use this column for giving extra information</li><li>If a number of grammatical mistakes/errors occur in the text, or the text is error-free, it should be mentioned here.</li><li>The calligraphy, type of ink used in the text, special size or shape of manuscript, if any i.e.. gandi, kacchapi, musti, samputaphalaka, chedapati, scroll; the style of writing i.e. tripatha, caturpatha, suksmaksari, sunda and ornamentation of the text should be mentioned.</li><li>Details of illustrated manuscripts should be documented – colour, illustrations, style.</li></ul>"
	 //  }]
	}
	
  ]


});

