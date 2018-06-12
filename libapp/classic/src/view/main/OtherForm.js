// Init the singleton.  Any tag-based quick tips will start working.
Ext.tip.QuickTipManager.init();

var localBookCategories = Ext.create('Ext.data.Store', {
    fields: ['id', 'label'],
    data : [
		{"id":0, "label":"" },
        {"id":1, "label":"Book" },
        {"id":2, "label":"Manuscript" }
    ]
});

var tpl = new Ext.create('Ext.XTemplate', 
	'{[this.currentKey = null]}',
	'<tpl for=".">',
		'<tpl if="this.shouldShowHeader(group)">',
			'<div class="group-header"><b>{[this.currentKey = values.group]}</b></div>',
		'</tpl>',
		'<div class="x-boundlist-item"><b>{label}</b> <small><i>({group})</i></small></div>',
	'</tpl>',
	{               
		shouldShowHeader: function(key){
			return this.currentKey != key;
		},
		getHeader: function(key){
			this.currentKey = key;
			return key;
		}
	}
);

/**
 * This view is an example list of people.
 */
Ext.define('library.view.main.OtherForm', {
    extend: 'Ext.Container',
    xtype: 'otherform',
    title: {text: 'Books', cls:'form-class-title' },
	layout: {
		type: 'hbox',align:'fit'
    },
	shrinkWrap:false,
	flex:1,
	width:'100%',
	height:'83%',
	requires: [
		'library.view.main.CategoryTagField',
		'library.view.main.MainController',
		'library.store.ClassificationCategories',
        'library.store.Languages',
		'library.store.Materials',
		'library.store.Conditions',
		'library.store.Contributors'
    ],
	controller:'main',
	style: 'color:#fff;font-weight: bold;',
    bodyPadding: 5,
	viewModel: {
        type: 'otherbookmodel'
    },
	defaults: {
		plugins: [
		{
			ptype: 'afterlabelinfo'
		}]
	}, 
	items:[
		{
			xtype: 'gridpanel',
			itemId: 'myGridItemId',
			margin: '0 5 5 0',
			title: 'Books',
			reference : 'localbooks',
			bodyPadding: 5,
			hideHeaders: true,
			flex: 1,
			tools: [{
				itemId: 'refresh',
				tooltip: 'Reload List',
				type: 'next',
				handler: 'refreshGridHandler'
			}],
			bind:{
				store: '{mystore}',
				selection: '{books}'
			},
			columns: [
				{ 
					dataIndex: 'source_url', flex: 1,
					xtype: 'templatecolumn',
					tpl: '<span>{roman_script_title}, <a href="{source_url}" target="_blank">{source_url}</a></span>'
				},
				{
					xtype: 'actioncolumn',
					flex: 1,
					items: [{
						iconCls: 'x-fa fa-close redIcon',
						tooltip: 'Reject',
						handler: 'rejectBookHandler'
					}]
				}
			]
		},
		{
			xtype: 'form',
			itemId:'panelbindItemId',
			margin: '0 0 0 10',
			padding: 0,
			bodyPadding:0,
			width:'60%',
			hidden:true,
			bind   : {
                hidden : '{!localbooks.selection}'
            },
			autoScroll: true,
			scrollable: true,
			height: '100%',
			fieldDefaults : {
                anchor : '100%',
				labelWidth: 140,
				labelPad: 35,
				margin: '10 10 0 0'
            },
			defaults:{
				cls: 'form-class'
			},
			items: [
				{
				   xtype: 'combobox',
				   store: localBookCategories,
				   margin: '0 10 0 0',
				   fieldLabel: 'Type',
				   queryMode: 'local',
				   valueField: 'id',
				   displayField: 'label',
				   typeAhead: true,
				   forceSelection: true,
				   filterPickList: true,
				   allowBlank: false,
				   bind: '{books.type}',
				   plugins:[{
						ptype:'afterlabelinfo',
						qtip:'Indicates whether it is a book or manuscript'
				   }]
				},
				{
				   xtype: 'textfield',
				   fieldLabel: 'Roman Title',
				   allowBlank: false,
				   bind: '{books.roman_script_title}'
				},
				{
				   xtype: 'textfield',
				   fieldLabel: 'Original Title',
				   allowBlank: true,
				   bind: '{books.original_title}'
				},
				{
				   xtype: 'CategoryTagField',
				   fieldLabel: 'Category',
				   allowBlank: true,
				   displayField: '<strong>{label}</strong> <small><i>({group})</i></small>',
				   labelTpl: '<strong>{label}</strong> <small><i>({group})</i></small>',
				   valueField: 'id',
				   store: Ext.create('library.store.ClassificationCategories',{autoLoad:true}),
				   queryMode: 'local',
				   filterPickList: false,
				   listConfig: {
					   cls: 'grouped-list'
				   },
				   tpl: tpl,
				   bind: '{books.category}'
				},
				{
				   xtype: 'tagfield',
				   id: 'languages',
				   fieldLabel: 'Languages',
				   allowBlank: true,
				   displayField: 'label',
				   valueField: 'id',
				   store: Ext.create('library.store.Languages',{autoLoad:true}),
				   queryMode: 'local',
				   filterPickList: false,
				   bind: '{books.languages}'
				},				
				{
					xtype: 'panel',
					layout: { type: 'card' },
					id: 'categorycard',
					bind: {
					activeItem: '{books.type}' //'{selectedItem.value}'
					},
					margin:0, padding:0,
					items: [
						{ xtype:'panel', layout: { type:'vbox', align: 'stretch'}, margin:0, padding:0, itemId:'empty-card', width:'100%', height:'100%' 
						},						
						{ xtype:'panel', layout: { type:'vbox', align: 'stretch'}, margin:0, padding:0, itemId:'book-card', width:'100%', height:'100%',
						defaults:{
							labelPad: 35
						},
						  items: [
							{
								layout: 'column',
								width: '100%',
								margin:0, padding:0,
								items: [
									{
									   xtype: 'textfield',
									   fieldLabel: 'Author 1',
									   columnWidth: 0.60,
									   allowBlank: false,
									   bind: '{books.author1}'
									},
									{
									   xtype: 'tagfield',
									   columnWidth: 0.40,
									   allowBlank: false,			
									   displayField: 'label',
									   valueField: 'id',
									   store: Ext.create('library.store.Contributors',{autoLoad:true}),
									   queryMode: 'local',
									   filterPickList: false,
									   bind: '{books.contributor1}'
									},
									{
									   xtype: 'textfield',
									   columnWidth: 0.60,
									   fieldLabel: 'Author 2',
									   bind: '{books.author2}'
									},
									{
									   xtype: 'tagfield',
									   columnWidth: 0.40,
									   displayField: 'label',
									   valueField: 'id',
									   store: Ext.create('library.store.Contributors',{autoLoad:true}),
									   queryMode: 'local',
									   filterPickList: false,									   
									   bind: '{books.contributor2}'
									},
									{
									   xtype: 'textfield',
									   columnWidth: 0.60,
									   fieldLabel: 'Author 3',
									   bind: '{books.author3}'
									},
									{
									   xtype: 'tagfield',
									   columnWidth: 0.40,
									   displayField: 'label',
									   valueField: 'id',
									   store: Ext.create('library.store.Contributors',{autoLoad:true}),
									   queryMode: 'local',
									   filterPickList: false,									   
									   bind: '{books.contributor3}'
									},
									{
									   xtype: 'textfield',
									   columnWidth: 0.60,
									   fieldLabel: 'Author 4',
									   bind: '{books.author4}'
									},
									{
									   xtype: 'tagfield',
									   columnWidth: 0.40,
									   displayField: 'label',
									   valueField: 'id',
									   store: Ext.create('library.store.Contributors',{autoLoad:true}),
									   queryMode: 'local',
									   filterPickList: false,									   
									   bind: '{books.contributor4}'
									}
								]
							},
							{
							   xtype: 'textareafield',
							   id: 'publisher',
							   fieldLabel: 'Publisher',
							   allowBlank: false,
							   bind: '{books.book_publishers}'
							},
							{
								layout:{type:'hbox', align: 'stretch'},
								defaults:{
									labelPad: 35
								},								
								items:[{
								   xtype: 'datefield',
								   width: '50%',
								   id: 'published_on',
								   fieldLabel: 'Published Year',
								   maxValue: new Date(),
								   format: 'm/Y',
								   allowBlank: false,
								   bind: '{books.book_published_year}'
								},{
								   xtype: 'numberfield',
								   margin: '10 0 0 10',
								   labelPad: 30,
								   width: '48%',
								   id: 'numpages',
								   fieldLabel: 'Number of Pages',
								   hideTrigger: true,
								   allowDecimals: false,
								   allowExponential: false,
								   allowBlank: true,
								   bind: '{books.book_numpages}'
								}]
							},
							{
							   xtype: 'textfield',
							   id: 'description',
							   fieldLabel: 'Description',
							   allowBlank: true,
							   bind: '{books.book_description}'
							},
							{
							   xtype: 'textfield',
							   id: 'metadata',
							   fieldLabel: 'Meta-data',
							   allowBlank: true,
							   bind: '{books.book_metadata}'
							},
							{
								layout:{type:'hbox', align: 'stretch'},
								defaults:{
									labelPad: 35
								},
								items:[{
									   xtype: 'numberfield',
									   width: '50%',
									   id: 'isbn13',
									   fieldLabel: 'ISBN 13',
									   allowBlank: true,
									   maxLength:13,
									   enforceMaxLength:true,
									   hideTrigger: true,
									   allowDecimals: false,
									   allowExponential: false,
									   bind: '{books.book_isbn13}'
									},{
									   xtype: 'numberfield',
									   margin: '10 0 0 10',
									   width: '48%',
									   id: 'isbn',
									   fieldLabel: 'ISBN',
									   allowBlank: true,
									   maxLength:10,
									   enforceMaxLength:true,
									   hideTrigger: true,
									   allowDecimals: false,
									   allowExponential: false,
									   bind: '{books.book_isbn}'
									}
								]
							},
							{
								layout: {type:'hbox', align: 'stretch'},
								defaults:{
									labelPad: 35
								},
								items: [
									{
									   xtype: 'checkboxfield',
									   margin: '10 0 0 0',
									   width: '50%',
									   id: 'copyright',
									   fieldLabel: 'Copyright',
									   allowBlank: true,
									   bind: '{books.book_is_copyrighted}'
									},
									{
									   xtype: 'datefield',
									   margin: '10 0 0 10',
									   width: '48%',
									   labelPad: 40,
									   id: 'copyright_year',
									   maxValue: new Date(),
									   format: 'Y',
									   fieldLabel: 'Copyright Year',
									   allowBlank: true,
									   bind: '{books.book_copyright_year}'
									}
								]
							},
							{
								layout:{type:'hbox', align: 'stretch'},
								defaults:{
									labelPad: 35
								},
								items:[
									{
									   xtype: 'numberfield',
									   width: '50%',
									   id: 'edition',
									   fieldLabel: 'Edition',
									   allowBlank: true,
									   minValue:1,
									   maxValue:100,
									   bind: '{books.book_edition}'
									},
									{
									   xtype: 'numberfield',
									   margin: '10 0 0 10',
									   width: '48%',
									   //labelPad: 5,
									   id: 'price',
									   fieldLabel: 'Price',
									   allowBlank: true,
									   bind: '{books.book_price}'
									}								
								]
							}
						  ]
						},
						{ xtype:'panel', layout: {type:'vbox', align: 'stretch'}, margin:0, padding:0, itemId:'manuscript-card', width:'100%', height:'100%',
						  defaults:{
							 labelPad: 35
						  },						
						  items: [
							{
							   xtype: 'textfield',
							   id: 'manuscript_script',
							   fieldLabel: 'Script',
							   bind: '{books.manuscript_script}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:'Refers to the recognized signs and characters used to represent the units of language in a systematic fashion, such as Newari, Grantha and Brahmi.Many Indian languages have the same name as their script like Oriya, Telugu and Tamil.'
							   }]
							},
							{
							   xtype: 'combobox',
							   id: 'manuscript_material',
							   fieldLabel: 'Material',
							   store: Ext.create('library.store.Materials',{autoLoad:true}),
							   queryMode: 'local',
							   valueField: 'id',
							   displayField: 'label',
							   typeAhead: true,
							   forceSelection: false,
							   filterPickList: false,
							   bind: '{books.manuscript_material}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:'Refers to the substance or adharapatala that the manuscript is made of including ivory, palm leaf, birch-bark, wood, gold, silver, paper, tortoise shell, agaru-bark, sanchi-pat, tula-pat, etc'
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_scribe',
							   fieldLabel: 'Scribe',
							   bind: '{books.manuscript_scribe}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:'This refers to the person who has written the copy of the manuscript'
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_subject',
							   fieldLabel: 'Subject',
							   bind: '{books.manuscript_subject}'
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_institute',
							   fieldLabel: 'Institute',
							   bind: '{books.manuscript_institute}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:'Includes collection from personal library, temple, mutt and prsonal collection'
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_address',
							   fieldLabel: 'Address',
							   bind: '{books.manuscript_address}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:'The complete postal address of the institution or individual that owns the manuscript'
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_foliosinbundle',
							   fieldLabel: 'Folios in Bundle',
							   bind: '{books.manuscript_folios_in_bundle}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:'Refers to the number of the folios within a manuscript<br><ul><li>Blank folios should be included in the tally and noted in Remarks.</li><li>One folio is counted for both 1a and 1b (obverse and reverse) sides</li><li>Number of folios in a manuscript can be different from its pagination. <br>For instance, a manuscript may have folios numbered from 1 to 50 and if folios 4-8 are missing, then the number of folios in the manuscript is 45</li></ul>'
							   }]
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
							   bind: '{books.manuscript_condition}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:"Refers to the condition of the manuscript—‘good', ‘bad', ‘ worm infected' ‘fungus', and ‘stuck folio ', ‘brittle'; ‘illustration/script illegible'"
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_foliosintext',
							   fieldLabel: 'Folios in Text',
							   bind: '{books.manuscript_folios_in_text}'
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_textrange',
							   fieldLabel: 'Text Range',
							   bind: '{books.manuscript_text_range}'
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_lines',
							   fieldLabel: 'Lines',
							   bind: '{books.manuscript_lines}'
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
									   bind: '{books.manuscript_length}',
									   plugins:[{
											ptype:'afterlabelinfo',
											qtip:"Length, in centimeters"
									   }]
									},
									{
									   xtype: 'numberfield',
									   id: 'manuscript_width',
									   fieldLabel: 'Width',
									   hideTrigger: true,
									   allowDecimals: false,
									   allowExponential: false,
									   width: '50%',
									   labelPad: 30,
									   bind: '{books.manuscript_width}',
									   plugins:[{
											ptype:'afterlabelinfo',
											qtip:"Width, in centimeters"
									   }]
									}
								]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_beginningline',
							   fieldLabel: 'Begining Line',
							   bind: '{books.manuscript_beginning_line}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:"The starting lines or some stanzas of the text.<br><ul><li>It should be written in Roman script with diacritical marks or in Devanagari.</li><li>The small texts of a Stotra may be noted. e.g.: Aum namo ganeśāya, namo arihantānam, siddham or any auspicious symbols or any mangala sloka of iṣṭadeva.</li><li>If the starting portion of first folio is missing, the starting text of the available portion may be noted.</li></ul>"
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_endingline',
							   fieldLabel: 'Ending Line',
							   bind: '{books.manuscript_ending_line}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:"The ending lines or stanzas of the text before colophon"
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_notes',
							   fieldLabel: 'Notes/Content',
							   bind: '{books.manuscript_notes}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:"It is the anukramanika , the list of chapters and sections of the treatise including key words or phrases that describe the content of the resource"
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_remarks',
							   fieldLabel: 'Remarks',
							   bind: '{books.manuscript_remarks}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:"<ul><li>The details of the manuscript, if it is available elsewhere.</li><li>If it is published or unpublished.</li><li>Material of the cover of the manuscript – ivory, skin, wood etc.</li><li>Whether there is anything written accompanying the text like notes</li><li>The cataloguer can use this column for giving extra information</li><li>If a number of grammatical mistakes/errors occur in the text, or the text is error-free, it should be mentioned here.</li><li>The calligraphy, type of ink used in the text, special size or shape of manuscript, if any i.e.. gandi, kacchapi, musti, samputaphalaka, chedapati, scroll; the style of writing i.e. tripatha, caturpatha, suksmaksari, sunda and ornamentation of the text should be mentioned.</li><li>Details of illustrated manuscripts should be documented – colour, illustrations, style.</li></ul>"
							   }]
							}
						  ]
						}
					]
				},
				{
				   xtype: 'textfield',
				   id: 'source_url',
				   margin: '10 10 10 0',
				   fieldLabel: 'Url',
				   tpl: '<a href="{Url}" target="_blank">{Url}</a>',
				   bind: '{books.source_url}'
				}
			],
			dockedItems: [{
				xtype: 'toolbar',
				style:'background:transparent;',
				dock: 'bottom',
				ui: 'footer',
				fixed: true,
				items: [
					{ 	xtype: 'button', text: 'Save', formBind: true, style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;',
						handler: function() {
						}
					}
				]
			}]
		}
	]
});
/*
var removeUser = function(grid, context){
		var record = context;
		Ext.Msg.confirm(
			'Delete Book',
			'Are you sure you want to delete the book <strong>"' + record.get('roman_script_title') + '"</strong><br> ' + record.get('source_url') + '?',
			doRemoveUser.bind(this, record)
        );
	},
    doRemoveUser = function (record, btn) {
        if (btn === 'yes') {
            var store = this.getStore('mystore');
            store.remove(record);
        }
    };
*/	