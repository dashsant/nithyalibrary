// Init the singleton.  Any tag-based quick tips will start working.
Ext.tip.QuickTipManager.init();
/*
Ext.define('library.view.main.OtherBookModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.otherbookmodel',

    stores:{

        mystore:{

        fields:['title', 'author1', 'author2', 'author3', 'author4', 'type', 'category', 'contributor1', 'contributor2', 'contributor3', 'contributor4', 'edition', 'numpages', 'isbn', 'source_url', 'saved_at_url'],
        data:{'items':[
			{
				title:"Sidhhant Shiromani", author:"Scott", source_url:"https://archive.org/details/SidhhantshiromaniSanskrit_201803", languages:1, type:1, 
				author1:'Person A', author2:'Person B', contributor1:'1', contributor2:'2'
			},
			{title:"Dwight", author:"Schrute", source_url:"http://dwight.book", type:1},
			{title:"Jim", author:"Halpert", source_url:"http://jim.script", type:2},
			{title:"Kevin", author:"Malone", source_url:"http://kevin.book", type:1},
			{title:"Angela", author:"Martin", source_url:"http://angela.script", type:2}
        ]},

        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
       }

    }
});
*/

var localBookCategories = Ext.create('Ext.data.Store', {
    fields: ['id', 'label'],
    data : [
		{"id":0, "label":"" },
        {"id":1, "label":"Book" },
        {"id":2, "label":"Manuscript" }
    ]
});

// Create the data store for the grid...
var gridStore = Ext.create('Ext.data.Store', {
	fields: [{
		name: 'textbox',
		type: 'string'
	}, {
		name: 'contributions'
	}],	
	proxy : {
		type : 'memory',
		reader : {
			type : 'json'
		}
	}
});

// Create a cellediting plugin object...
var extGrid_cellediting = Ext.create('Ext.grid.plugin.CellEditing', {
	clicksToEdit : 1
});

function myColumnRenderer(value, metaData, record, rowIndex, colIndex, store) {
	console.log(record);
	//console.log(store);
    //do something with the data and return
    return value;
}

// Define the grid columns
var gridColumns = [
	{
		dataIndex : 'textbox',
		bind: '{textbox}',
		menuDisabled : true,
		text : 'Name',
		flex : 1,
		editor : new Ext.form.TextField(), 
		renderer: myColumnRenderer
	},
	{
		dataIndex : 'contributions',
		bind: '{contributions}',
		menuDisabled : true,
		text : 'Contribution(s)',
		flex : 1,
		editor : {
			xtype: 'tagfield',
			typeAhead: true,
			triggerOnClick: true,
			createNewOnBlur: true,
			createNewOnEnter: true,
			displayField: 'label',
		    valueField: 'label',
		    store: Ext.create('library.store.Contributors',{autoLoad:true}),
		    queryMode: 'local',
		    filterPickList: false,
			triggerAction: 'all'
		}
	}
];
// Handler to the 'Add row' toolbar button
var addGridRow = function() {

	var newRowIndex;

	// Add a new blank grid row...
	gridStore.insert(gridStore.data.length, {textbox:'', contributions:''} /*, new extGrid_model()*/);

	// Get the zero-based row index of the newly added row...
	newRowIndex = gridStore.getCount() - 1;

	// Focus on the newly added row...
	authorsGrid.getView().focusRow(newRowIndex);

	// Start editing the Textbox cell of the newly added row...
	extGrid_cellediting.startEdit(gridStore.getAt(newRowIndex), 0)
};

// Create a bottom toolbar with a button to add a new grid row
var authorsGridToolbar = Ext.create('Ext.toolbar.Toolbar', {
	items: [
		{
			  id : 'btn_AddRow'
			, text : 'Add Contributor'
			, handler : function() { addGridRow();}
		}
	]
});

var authorsGrid = Ext.create('Ext.grid.Panel', {
	width : '100%',
	height: 120,
	columns : gridColumns,
	store : gridStore,
	bbar : authorsGridToolbar,
	frame : false,
	bind: {
            store: '{books.contributors}'
        },
	plugins : [extGrid_cellediting]
});

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
        'library.store.Languages',
		'library.store.Conditions',
		'library.store.Contributors'
    ],
	style: 'color:#fff;font-weight: bold;',
    bodyPadding: 5,
	viewModel: {
        type: 'otherbookmodel'
    },
	defaults: {
		plugins: [/*{
			ptype: 'formlabelrequired'
		},*/
		{
			ptype: 'afterlabelinfo'
		}]
	}, 
	items:[
		{
			xtype: 'gridpanel',
			itemId:'myGridItemId',
			margin: '5 5 5 0',
			title:'Books',
			reference : 'localbooks',
			bodyPadding:5,
			flex:1,
            //header: false,
			tools: [{
				itemId: 'refresh',
				tooltip: 'Reload List',
				type: 'refresh',
				handler: function () {
					// do refresh
				}
			}],
			
			bind:{
				store:'{mystore}',
				selection:'{books}'
			},
			columns: [
				{ 
					text: 'Url', dataIndex: 'source_url', flex: 1,
					xtype: 'templatecolumn',
					tpl: '<a href="{source_url}" target="_blank">{source_url}</a>'
				},
				{
					xtype:'actioncolumn',
					flex: 1,
					items: [{
						iconCls: 'x-fa fa-close redIcon',
						tooltip: 'Reject',
						handler: function(grid, rowIndex, colIndex) {
							var rec = grid.getStore().getAt(rowIndex);
							removeUser(grid, rec);
						}
					}]
				}
			]
		},
		{
			xtype: 'form',
			itemId:'panelbindItemId',
			margin: '5 15 0 10',
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
				labelWidth: 150,
				labelPad: 45,
				margin: '10 10 0 0'
            },
			defaults:{
				cls: 'form-class'
			},
			items: [
				{
				   xtype: 'combobox',
				   store: localBookCategories,
				   fieldLabel: 'Type',
				   queryMode: 'local',
				   valueField: 'id',
				   displayField: 'label',
				   typeAhead: true,
				   forceSelection: true,
				   filterPickList: true,
				   allowBlank: false,
				   bind: '{books.type}',
				   listeners:{
					   /*select:function(combo, record, eOpts){
						    var me = this,
								newValue = me.getValue(),
								form = combo.up('form'),
								categoryCard = form.down('#categorycard');
							if(newValue == '1') {
								categoryCard.getLayout().setActiveItem('book-card');
							} else if(newValue == '2') {
								categoryCard.getLayout().setActiveItem('manuscript-card');
							} else {
								categoryCard.getLayout().setActiveItem('empty-card');
							}
					   },
					   change:function(){
						   
					   }*/
				   },
				   plugins:[{
						ptype:'afterlabelinfo',
						qtip:'Indicates whether it is a book or manuscript'
				   }]
				},
				{
				   xtype: 'textfield',
				   fieldLabel: 'Title',
				   allowBlank: false,
				   bind: '{books.title}'
				},
				{
				   xtype: 'textfield',
				   fieldLabel: 'Category',
				   allowBlank: true,
				   bind: '{books.category}'
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
							labelPad: 45
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
							   xtype: 'textfield',
							   id: 'publisher',
							   fieldLabel: 'Publisher',
							   allowBlank: false,
							   bind: '{books.publisher}'
							},
							{
								layout:{type:'hbox', align: 'stretch'},
								width:'100%',
								items:[{
								   xtype: 'datefield',
								   width: '50%',
								   id: 'published_on',
								   fieldLabel: 'Published Year',
								   maxValue: new Date(),
								   format: 'm/Y',
								   allowBlank: false,
								   bind: '{books.published_on}'
								},{
								   xtype: 'numberfield',
								   margin: '10 0 0 10',
								   labelPad: 0,
								   width: '48%',
								   id: 'numpages',
								   fieldLabel: 'Number of Pages',
								   hideTrigger: true,
								   allowDecimals: false,
								   allowExponential: false,
								   allowBlank: true,
								   bind: '{books.numpages}'
								}]
							},
							{
							   xtype: 'textfield',
							   id: 'description',
							   fieldLabel: 'Description',
							   allowBlank: true,
							   bind: '{books.description}'
							},
							{
							   xtype: 'textfield',
							   id: 'metadata',
							   fieldLabel: 'Meta-data',
							   allowBlank: true,
							   bind: '{books.metadata}'
							},
							{
								layout:{type:'hbox', align: 'stretch'},
								defaults:{
									labelPad: 45
								},
								items:[{
									   xtype: 'numberfield',
									   width: '50%',
									   id: 'isbn',
									   fieldLabel: 'ISBN',
									   allowBlank: true,
									   maxLength:13,
									   enforceMaxLength:true,
									   hideTrigger: true,
									   allowDecimals: false,
									   allowExponential: false,
									   bind: '{books.isbn}'
									},{
									   xtype: 'datefield',
									   margin: '10 0 0 0',
									   width: '48%',
									   labelPad: 0,
									   id: 'copyright',
									   maxValue: new Date(),
									   format: 'Y',
									   fieldLabel: 'Copyright',
									   allowBlank: true,
									   bind: '{books.copyright}'
								}]
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
								layout:{type:'hbox', align: 'stretch'},
								defaults:{
									labelPad: 45
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
									   bind: '{books.edition}'
									},
									{
									   xtype: 'numberfield',
									   margin: '10 0 0 10',
									   width: '48%',
									   labelPad: 5,
									   id: 'price',
									   fieldLabel: 'Price',
									   allowBlank: true,
									   bind: '{books.price}'
									}								
								]
							}
						  ]
						},
						{ xtype:'panel', layout: {type:'vbox', align: 'stretch'}, margin:0, padding:0, itemId:'manuscript-card', width:'100%', height:'100%',
						  defaults:{
							 labelPad: 45
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
							   queryMode: 'local',
							   valueField: 'value',
							   displayField: 'label',
							   typeAhead: true,
							   forceSelection: true,
							   filterPickList: true,
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
							   bind: '{books.manuscript_institute}'
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
							   bind: '{books.manuscript_foliosinbundle}',
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
							   bind: '{books.manuscript_foliosintext}'
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_textrange',
							   fieldLabel: 'Text Range',
							   bind: '{books.manuscript_textrange}'
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
									labelPad: 45
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
									   labelPad: 0,
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
							   bind: '{books.manuscript_beginningline}',
							   plugins:[{
									ptype:'afterlabelinfo',
									qtip:"The starting lines or some stanzas of the text.<br><ul><li>It should be written in Roman script with diacritical marks or in Devanagari.</li><li>The small texts of a Stotra may be noted. e.g.: Aum namo ganeśāya, namo arihantānam, siddham or any auspicious symbols or any mangala sloka of iṣṭadeva.</li><li>If the starting portion of first folio is missing, the starting text of the available portion may be noted.</li></ul>"
							   }]
							},
							{
							   xtype: 'textfield',
							   id: 'manuscript_endingline',
							   fieldLabel: 'Ending Line',
							   bind: '{books.manuscript_endingline}',
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
			buttons: [{
                text: 'Save',
                handler: function() {
                }
            }]
		}
	]
});

var removeUser = function(grid, context){
		var record = context;
		Ext.Msg.confirm(
			'Delete Book',
			'Are you sure you want to delete the book "' + record.get('title') + ' ' + record.get('source_url') + '"?',
			doRemoveUser.bind(this, record)
        );
	},
    doRemoveUser = function (record, btn) {
        if (btn === 'yes') {
            var store = this.getStore('mystore');
            store.remove(record);
        }
    };