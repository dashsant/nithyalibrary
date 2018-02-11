Ext.define('library.view.main.LibraryHome', {
    extend: 'Ext.tab.Panel',
    xtype: 'libraryhome',
	width: '100%',
	height: '100%', //800
	tabPosition:'left',
	tabRotation:0,
	ui: 'navigation',
	border: false,
	autoScroll:true,
	tabBar: {
        border: false
    },
    requires: [
		'library.view.main.SearchResult',
		'library.view.main.MenuscriptCategoryResult'
		
    ],
	items:[
		{
			
			title: "Avatar's vision",
			html: '<div><div style="float:left;margin-right:20px;margin-bottom:20px;width:70%;font-family:\'Open Sans\',\'Helvetica Neue\', helvetica, arial, verdana, sans-serif;font-size:14px;">'+
            '<p style="line-height:1.4;text-align:justify;">A civilisation is made up of its Gods, Scriptures, rituals and tenets that are lived. These '+ 'aspects provide the <i>vatavarana</i> (environment) where human beings flourish in whichever dimension of life they are passionate about. Sanatana Hindu Dharma is the oldest'+' living civilisation on planet earth. This glorious civilisation has about 1,000,000 source books. One source book is sufficient for a religion to emerge. For most of'+' these books, there are <i>bhashyas</i> (commentaries), <i>thikas</i> (commentaries on commentary), and <i>varthikas</i> (commentaries on thikas). Imagine the richness of this tradition.<br><br>'+
			'In this digital age, Sanatana Hindu Dharma is hardly understood even by Hindus as the amount of digitization of Hindu scriptures is a very small percentage of what is even'+ 'available or known. Translation of our scriptures to commonly used languages of this day is another issue in accessing these treasures of our ancient and ever-relevant wisdom.<br><br> '+
			'It is very unfortunate; Hindus spend so much money on building temples, but we don’t spend even pennies on building libraries , because we don’t care about knowledge.  This is'+ 'also one reason why we have become weak.  The reason for why we have been weakened is we spend so much money on building temples and not enough on libraries. <br><br>'+
			'I want educating organizations, educational tools, knowledge transmission methodologies, knowledge transmission apparatus, knowledge transmission systems to be available.  I want'+' that. The “Nithyananda Hinduism Library”, is a step to start addressing these issues.'+
			'</p><br>'+
            '</div><div style="float:right;margin-left:10px;margin-top:5px;">'+
            '<h3>Swamiji\'s Vision Videos</h3><br><iframe width="260" height="200" src="https://www.youtube.com/embed/Ul77nnoqSpY" frameborder="0" allowfullscreen></iframe></div></div>',
			padding: 15
		},
		{
			title: 'Vedagamas',
			items:[
				{
					xtype:'container',
					//glyph:72,
					autoScroll:true,
					height: 600,
					width: '100%',
					html:'<div><h1>Vedagamas – The Complete Process for Completion & Enlightenment</h1><br>'+
					'<b style="font-weight:bold;">Delivered by Sadāshiva, received by Devi, adopted as the Cosmic Constitution by the maintainer, Vishnu, is Agama.</b><i> – Paramahamsa Nithyananda</i><br><br>'+
					'<b style="font-weight:bold;">Agama</b> literally means, that which has been bequeathed or ‘come down.’ They are an assemblage of scriptures of a gamut of Hindu devotional schools, with three main branches: Shaivism (of Lord Shiva), Vaishnavism (of Lord Vishnu) and Shaktism (of Adi Shakti). The Agama literature is humungous and includes: 28 Shaivagamass, 77 Shakta Agamas, which are also called ‘tantras’ (Hindu mystical texts), and 215 Vaishnava Agamas. But as Paramahamsa Nithyananda asserts, <b style="font-weight:bold;">“There are Agamas - Shakta Agamas, Vaishnav Agamas, Shaiva Agamas - but all Agamas non-controversially agree, that they have been delivered by Sadashiva.”</b><br><br>'+
					'Most of the plenipotentiaries, such as, Sanjukta Gupta, of the Hindu tradition asserted that the maxims of these Agamas brought out the true spirit of the Vedas (ancient scriptures, meaning, ‘to know’ or to have knowledge of). Agamas teach systematic methods of spirituality that involve worship in the form of rituals, pujas (acts of worship) and yajnas (a ritual sacrifice with a particular objective), but they also lay down the means to live the lifestyle of the Gods themselves.<br><br>' +
					'<b style="font-weight:bold;">Agama – The Shaastra Pramaana:</b><br>'+
					'<p style="text-align:center;">āgatāṃ śivavaktrebhyo gataṃ ca girijāmukhe ।<br>mataṃ hi vāsudevasya tasmādāgama ucyate ॥<br>~ svacchanda tantra</p>'+
					'“That which has come from Śiva’s mouth and directly heard and received by Devi Girijā (Pārvati), which has been ordained by Śri Vāsudeva (Viṣṇu) to govern the world, therefore that is called Āgama.”<br>The Agamas are forms of instructions from Shiva to Shakti and take their name from the first three letters of the words agatam (originated), gatam (fell) and matam (ordained) as mentioned in the shloka.'+
					'<h2>Shaivagamas – A Chronicle:</h2>The Agamas existed mostly in South India, in Tamil Nadu recorded on palm leaf manuscripts and preserved in the homes of Shivacharyas who were entrusted with organising and performing the pujas and rituals in the Shiva temples for several millenniums. They are in <i>grantha</i> script evolved by the Tamil people to preserve Sanskrit scriptures 1000s of years ago.<br>The Agamas saw their greatest revival soon after Adi Shankaracharya unified Sanatana Hindu Dharma, during the times of the Shaiva devout Chola rulers, from the 9th to 12th centuries CE.<br>A distinctive Shaiva Advaita philosophy took shape from the days of Thirumoolar and Karaikal Ammaiyar which was given a fresh life and a new direction by the Saiva Nayamars such as Sambanthar, Appar, Sundarar and Manikkavasagar. Under these saints, the Agamas flourished into temple building and temple worship from the 9th to the 13th centuries CE. The greatest exponent of this revival was the saint, Thirugnanasambanthar.<br>While the Shaiva Agamas led to the Shaiva Siddhanta philosophy in Tamil-speaking regions of South-India, it gave rise to Kashmir Saivism in the Northern region of India i.e. in Kashmir.</div>',
					padding: 15
				}
			]

		},
		{
			title: "Scriptures",
			items:[
				{
					xtype:'menuscriptcategoryresult'
				}
			]
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
				t.getTabBar().setStyle("background-color: rgb(255, 255, 255);border:1px solid gray;font-size:14;color:#000;font-style: bold;");
			}
		}
	}
});
