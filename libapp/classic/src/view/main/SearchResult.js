Ext.define('library.view.main.SearchResult', {
    extend: 'Ext.Panel',
    xtype: 'searchresult',
    autoScroll:'true',
	layout:'vbox',
	width:'100%',
    requires: [
        'library.view.main.MainModel',
		'library.view.main.FilterTree',
		'library.view.main.ResultGrid',
		'library.store.CatalogSearchResult'

    ],

	viewModel:{
		type:'main'
	},

	items:[

	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		items:[
			{
				bind:{
				html: '<h2>{resultCount} Matches Found For {searchString}</h2>'
				},
				xtype:'label',
				margin: '0 0 0 200'
			},
			{
				text:"Go To Home",
				xtype:'button',
				margin: '10 0 0 200',
				style: 'background-color: rgb(240, 176, 148);',
				handler: function(){
					Ext.getCmp('bottomCardPanel').setActiveItem(0);
				}
			}
		]

	},
	{
		xtype:'component',
		width:'100%',
		height: '2px',
		style:'background-color:rgb(217, 65, 3);',
		margin: '10 0 0 10'
	},
	{
		xtype:'container',
		layout:'hbox',
		width:'100%',
		height:800,
    items:[
		{
      xtype:'container',
    		width:200,
    		height:800,
        items:[
          {
    			xtype:'filter-tree',
    			margin: '10 0 0 10',
          listeners:{
            checkchange : function(node, checked) {
              var that = this;
              if (!node.get('leaf')) node.cascadeBy(function (n) { n.set('checked', checked); });
                node = node.parentNode;
                var siblingStateEqual = true;
                while (node != null && node.get('id') != 'root') {
                node.cascadeBy(function (n)
                {
                  if (n != node) {
                      if (n.get('checked') != checked) {
                          siblingStateEqual = false;
                      }
                  }
                });
                if (siblingStateEqual == checked) node.set('checked', checked);
                node = node.parentNode;
              };
            }
          }
        },
        {
          xtype: 'button',
           text : 'Apply Filter',
           margin: '10 0 0 10'
        }
      ]
		},
		{
			xtype:'result-grid',
			margin:'10 0 0 10',
			store:Ext.create('library.store.CatalogSearchResult',{autoLoad:false})
		}
  ]
	}
	]

});
