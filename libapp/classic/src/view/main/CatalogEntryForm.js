var localBookCategories = Ext.create('Ext.data.Store', {
    fields: ['id', 'label'],
    data : [
		{"id":0, "label":"" },
        {"id":1, "label":"Book" },
        {"id":2, "label":"Manuscript" }
    ]
});
Ext.define('library.view.main.CatalogEntryForm', {
    extend: 'Ext.form.Panel',
    xtype: 'catalogentryform',
	layout: {
		type: 'hbox',align:'fit'
    },
	id:'catalogentryformId',
	shrinkWrap:false,
	flex:1,
	width:'100%',
	height:'83%',
	style: 'color:#fff;font-weight: bold;',
	controller:'main',
    bodyPadding: 5,
	requires: [
		'library.view.main.MainController',
		'library.view.main.CatalogEntryModel',
		'library.view.main.CatalogMenuscriptForm',
		'library.view.main.CatalogBookForm'
	],	
	viewModel: 'catalog',
	items:[
		{
			xtype: 'form',
			itemId:'panelbindItemId',
			margin: '5 15 0 10',
			padding: 0,
			bodyPadding:0,
			width:'100%',
			hidden:false,
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
					layout: 'column',
					width: '100%',
					margin:0, 
					padding:0,
					items:[
					{
					   xtype: 'label',
					   fieldLabel: 'Preview URL',
					   id: 'source_url',
					   margin: '10 10 10 0',
					   bind:{
						   html:'{sourceUrlHtml}'
					   }
					},
					{
					   xtype: 'button',
					   padding: '10 10 10 0',
					   text:  'Reject?'
					},
					]
					
				},

				{
				   xtype: 'combobox',
				   store: localBookCategories,
				   fieldLabel: 'Type',
				   queryMode: 'local',
				   width:200,
				   valueField: 'id',
				   displayField: 'label',
				   typeAhead: true,
				   forceSelection: true,
				   filterPickList: true,
				   allowBlank: false,
				   bind: '{type}'
				},
				{
				   xtype: 'textfield',
				   fieldLabel: 'Title',
				   bind: '{title}',
				   allowBlank: false
				},
				{
				   xtype: 'textfield',
				   fieldLabel: 'Category',
				   allowBlank: true,
				   bind: '{category}'
				},				
				{
					xtype: 'panel',
					layout: {
						type: 'card' 
					},
					id: 'categorycard',
					bind: {
						activeItem: '{type}'   //'{selectedItem.value}'
					},
					margin:0, padding:0,
					items: [
						{ 
							xtype:'panel', 
							layout: { 
								type:'vbox', 
								align: 'stretch'
								}, 
							margin:0, 
							padding:0, 
							itemId:'empty-card', 
							width:'100%', 
							height:'100%' 
						},
						{
							xtype:'catalog-book-form'
						},
						{
							xtype:'catalog-menuscript-form'
						}
					]
				}
			],
			dockedItems: [{
				xtype: 'toolbar',
				style:'background:transparent;',
				dock: 'bottom',
				ui: 'footer',
				fixed: true,
				items: [
					{ 	
						xtype: 'button', 
						text: 'Save & Next', 
						formBind: true, 
						style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;',
						handler:'saveHandler'
					}
				]
			}]
		}
	]
});

