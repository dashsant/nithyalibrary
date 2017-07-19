Ext.define('library.view.main.LibraryHome', {
    extend: 'Ext.tab.Panel',
    xtype: 'libraryhome',
	width: '100%',
	
	items:[
		{
			title: "Swamiji's Vision",
			html: "Swamiji's Vision",
			padding: 15
		},
		{
			title: 'Sanatana Axiom',
			html: 'Sanatana Axiom',
			padding: 15
		},
		{
			title: "Vedas & Agamas",
			html: "Vedas & Agamas",
			padding: 15
		},
		{
			title: 'Gurukul - A Cognition Shift in Learning',
			html: 'Gurukul - A Cognition Shift in Learning',
			padding: 15
		},
		{
			title: 'Shrutis & Smritis',
			html: 'Shrutis & Smritis',
			padding: 15
		}
	],
	listeners:
	{
		added:{
			fn:function(t , container , index , eopts){
				t.getTabBar().setStyle("background-color: rgb(240, 176, 148);font-size:14;color:#fff;font-style: bold;");
			}
		}
	}
});