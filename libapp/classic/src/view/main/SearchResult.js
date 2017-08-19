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
				id:'searchLabel-id',
				html: '',
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
          id: 'filter-tree-id',
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
           margin: '10 0 0 10',
           name: 'applyFilterSearch',
 					handler:function(){
            var catFil = [];
            var scriptFil = [];
            var selectedScripts = Ext.getCmp('filter-tree-id').getChecked();

            for(var i=0;i<selectedScripts.length;i++)
            {
                var data = selectedScripts[i].getData();
                if(data.parentId !== 'Script') catFil.push(data.text);
                else scriptFil.push(data.text);
            }
             Ext.Ajax.request({
               url : '/api/librrary/filter',
               params  : {
                 searchText: Ext.getCmp('searchText').getValue(),
                 'catFilter[]': catFil,
                 'scriptFilter[]': scriptFil
               },
               method: 'POST',
               success : function(response){
 								var itemsObj = Ext.JSON.decode(response.responseText).items;

 								var finalArr = [];
 								for (var i = 0; i < itemsObj.length; i++) {
 								  var arr =[];
 								  arr.push(itemsObj[i].title);
 								  arr.push(itemsObj[i].subject);
 								  arr.push(itemsObj[i].script);
 								  arr.push(itemsObj[i].url);
 								  finalArr.push(arr);
 							  }
 							  //loading store data
 							  var s = Ext.getCmp('result-grid-id').getStore();
 							  s.getProxy().setData(finalArr);
 							  s.load();
 							  // loading data into MainModel
 							  var viewModel = Ext.getCmp('app-main').getViewModel();
 							  var sText = Ext.getCmp('searchText').getValue();
 							  var totalMatched = Ext.JSON.decode(response.responseText).totalMatched;
 							  var totalReturned = Ext.JSON.decode(response.responseText).totalReturned;

 							  viewModel.bind({
 								searchString: sText,
 								resultMatched: totalMatched,
 								resultReturned: totalReturned,
 								deep: true
 							},function(data){viewModel.setData(data);});
 							var h;
 							if(totalMatched > totalReturned )
 								h = '<h2>' + totalReturned +' Matches Found For ' + sText +'</h2>';
 							else
 								h = '<h2> More than 500 ' +' Matches Found For ' + sText +'</h2>';
 							Ext.getCmp('searchLabel-id').setHtml(h);
               }
             });
             Ext.getCmp('bottomCardPanel').setActiveItem(1);
 					}
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
