

Ext.define('library.view.main.CatalogBookForm', {
    extend: 'Ext.form.Panel',
    xtype: 'catalog-book-form',
	id:'catalogbookformid',
	layout: { 
		type:'vbox', 
		align: 'stretch'
	}, 
	margin:0, 
	padding:0, 
	itemId:'book-card', 
	width:'100%', 
	height:'100%',
	defaults:{
		labelPad: 35
	},
	requires: [
		'library.view.main.MainController',
		'library.view.main.CatalogBookModel'
	],	
//	viewModel: 'catalog',
	items: [
	{
		layout: 'column',
		width: '100%',
		margin:0, 
		padding:0,
		items: [
			{
			   xtype: 'textfield',
			   fieldLabel: 'Author 1',
			   columnWidth: 0.60,
			   allowBlank: false,
			   bind: '{author1}'
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
			   bind: '{contributor1}'
			},
			{
			   xtype: 'textfield',
			   columnWidth: 0.60,
			   fieldLabel: 'Author 2',
			   bind: '{author2}'
			},
			{
			   xtype: 'tagfield',
			   columnWidth: 0.40,
			   displayField: 'label',
			   valueField: 'id',
			   store: Ext.create('library.store.Contributors',{autoLoad:true}),
			   queryMode: 'local',
			   filterPickList: false,								   
			   bind: '{contributor2}'
			},
			{
			   xtype: 'textfield',
			   columnWidth: 0.60,
			   fieldLabel: 'Author 3',
			   bind: '{author3}'
			},
			{
			   xtype: 'tagfield',
			   columnWidth: 0.40,
			   displayField: 'label',
			   valueField: 'id',
			   store: Ext.create('library.store.Contributors',{autoLoad:true}),
			   queryMode: 'local',
			   filterPickList: false,									   
			   bind: '{contributor3}'
			},
			{
			   xtype: 'textfield',
			   columnWidth: 0.60,
			   fieldLabel: 'Author 4',
			   bind: '{author4}'
			},
			{
			   xtype: 'tagfield',
			   columnWidth: 0.40,
			   displayField: 'label',
			   valueField: 'id',
			   store: Ext.create('library.store.Contributors',{autoLoad:true}),
			   queryMode: 'local',
			   filterPickList: false,									   
			   bind: '{contributor4}'
			}
		]
	},
	{
	   xtype: 'textfield',
	   id: 'publisher',
	   fieldLabel: 'Publisher',
	   allowBlank: false,
	   bind: '{publisher}'
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
		   bind: '{published_on}'
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
		   bind: '{numpages}'
		}]
	},
	{
	   xtype: 'textfield',
	   id: 'description',
	   fieldLabel: 'Description',
	   allowBlank: true,
	   bind: '{description}'
	},
	{
	   xtype: 'textfield',
	   id: 'metadata',
	   fieldLabel: 'Meta-data',
	   allowBlank: true,
	   bind: '{metadata}'
	},
	{
		layout:{type:'hbox', align: 'stretch'},
		defaults:{
			labelPad: 35
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
			   bind: '{isbn}'
			},{
			   xtype: 'datefield',
			   margin: '10 0 0 0',
			   width: '48%',
			   labelPad: 5,
			   id: 'copyright',
			   maxValue: new Date(),
			   format: 'Y',
			   fieldLabel: 'Copyright',
			   allowBlank: true,
			   bind: '{copyright}'
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
	   bind: '{languages}'
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
			   bind: '{edition}'
			},
			{
			   xtype: 'numberfield',
			   margin: '10 0 0 10',
			   width: '48%',
			   labelPad: 5,
			   id: 'price',
			   fieldLabel: 'Price',
			   allowBlank: true,
			   bind: '{price}'
			}								
		]
	}
  ]
						
	
});

