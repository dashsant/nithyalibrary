Ext.define('library.view.main.LibraryHome', {
    extend: 'Ext.tab.Panel',
    xtype: 'libraryhome',
	width: '100%',
	height: 800,
	tabPosition:'left',
	tabRotation:0,
	ui: 'navigation',
	tabBar: {
        border: false
    },
    requires: [
		'library.view.main.SearchResult'
    ],
	items:[
		{
			title: "Swamiji's Message",
			html: '<div><div style="float:left;margin-right:20px;margin-bottom:20px;font-family:verdana;">'+
            '<p>Creating ideal civilization.Infrastructure of the West-Medical care,roads,dams,bridges,social freedom<br>'+
            'and the mental and physical structure of the Eastern Yogi. Yogic hardware,Vedic Mind, with Western Infrastructure<br>'+
            'that is what I define as complete human being-jeevan mukta.This is the Vedic tradition I want to revive,<br>'+
            'which is life affirming.It constantly inspires you to stand up and live beautifully,living in health,radiating joy,<br>'+
            'love and compassion attracting the right persons in your life,attracting right relationships,attracting wealth and<br>'+
            'contributing to society which will be peaceful and crime-free.</p><br>'+
            '</div><div style="float:right;margin-left:10px;margin-top:5px;">'+
            '<h3>Swamiji\'s Vision Videos</h3><br><iframe width="260" height="200" src="https://www.youtube.com/embed/Ul77nnoqSpY" frameborder="0" allowfullscreen></iframe></div></div>',
			padding: 15
		},
		{
			title: "Scriptures"
		},
		{
			title: 'Books',
			//glyph:72,
			html:'Site Under Construction',
			padding: 15
		},
		{
			title: "Videos",
			//glyph:72,
			html:'Site Under Construction',
			padding: 15
		},
		{
			title: 'Search Results',
			items:[
				{
					xtype:'searchresult'
				}
			]
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
