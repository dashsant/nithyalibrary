Ext.define('library.view.main.LibraryHome', {
    extend: 'Ext.tab.Panel',
    xtype: 'libraryhome',
	width: '100%',
	height: '100%', //800
	tabPosition:'left',
	tabRotation:0,
	ui: 'navigation',
	border: false,
	tabBar: {
        border: false
    },
    requires: [
		'library.view.main.SearchResult',
		'library.view.main.MenuscriptCategoryResult'
    ],
	items:[
		{
			title: "Who is the Avatar",
			items:[{
				xtype:'container',
				layout:{type:'hbox'},
				width: '100%',
				items: [
					{xtype: 'container',width:'100%',margin:'0 15 15 0',
					 html:'<div><p style="line-height:1.4;text-align:justify;font-size:14px">Paramahamsa Nithyananda is revered, regarded, respected and worshipped as The Avatar (living incarnation as per Hinduism) of super-consciousness by millions across the globe. He is the spiritual head of the Mahanirvani Peetha, oldest and largest apex body of Hinduism, and three time Guinness World Records® record holder. He and his <i>Sangha</i> (spiritual community) around the globe are serving humanity by reviving the Science of Completion℠, Science of Enlightenment℠ and manifesting various extraordinary spiritual powers as per the Vedic Agamic tradition of Sanatana Hindu Dharma. He is the author of 300 books, which are translated and published in 500 titles and various international languages. <br><br>His Sangha has a strong presence worldwide through numerous Temples, <i>Adheenams</i> (Temple monastery complex), <i>Gurukuls</i> (Vedic schools), universities, goshalas (cow shelters). His live <i>Satsangs</i> (spiritual discourses) are viewed every morning (8pm IST) by people from all countries around the world.'+
					 '</p></div>'
					}
				]
			}],
			padding: 15
		},
		{
			title: "Avatar's Mission",
			items:[
				{
					xtype:'container',
					layout:{type:'hbox'},
					width: '100%',
					items: [
						{xtype: 'container',width:'75%',
						 html:'<p style="line-height:1.4;text-align:justify;font-size:14px">A civilisation is made up of its Gods, Scriptures, rituals and tenets that are lived. These aspects provide the <i>vatavarana</i> (environment) where human beings flourish in whichever dimension of life they are passionate about. Sanatana Hindu Dharma is the oldest'+' living civilisation on planet earth. This glorious civilisation has about 1,000,000 source books. One source book is sufficient for a religion to emerge. For most of'+' these books, there are <i>bhashyas</i> (commentaries), <i>thikas</i> (commentaries on commentary), and <i>varthikas</i> (commentaries on thikas). Imagine the richness of this tradition.<br><br>'+
						 'In this digital age, Sanatana Hindu Dharma is hardly understood even by Hindus as the amount of digitization of Hindu scriptures is a very small percentage of what is even'+ 'available or known. Translation of our scriptures to commonly used languages of this day is another issue in accessing these treasures of our ancient and ever-relevant wisdom.<br><br> '+
						 'It is very unfortunate; Hindus spend so much money on building temples, but we don’t spend even pennies on building libraries , because we don’t care about knowledge.  This is also one reason why we have become weak.  The reason for why we have been weakened is we spend so much money on building temples and not enough on libraries. <br><br>'+
						 'I want educating organizations, educational tools, knowledge transmission methodologies, knowledge transmission apparatus, knowledge transmission systems to be available.  I want that. The “Nithyananda Hinduism Library”, is a step to start addressing these issues.'+
						 '</p>'
						},
						{xtype: 'container',width:'25%',margin:'0 0 0 15',
						html:'<div><h3>Swamiji\'s Vision Videos</h3><br><iframe width="100%" height="200" src="https://www.youtube.com/embed/Ul77nnoqSpY" frameborder="0" allowfullscreen></iframe></div>'
						}
					]
				}
			],
			padding: 15,
		},		
		{
			title: 'Ved-Agamas',
			items:[
				{
					xtype:'container',
					layout: {type: 'vbox',align:'fit'},
					shrinkWrap:false,
					flex:1,
					width:'100%',
					height:'100%',
					scrollable: true,
					autoScroll: true,
					items:[{
						xtype: 'container',width:'100%',margin:'0 15 15 0',
						bodyStyle: { minHeight: '980px',height:'980px',overflow:'auto' },
						autoScroll: true,
						listeners: {
							render: function() {
								var me = this;
								me.setHeight(window.innerHeight);
							}
						},
						html:'<div><p style="line-height:1.4;text-align:justify;font-size:14px"><h2>Vedagamas – The Complete Process for Completion & Enlightenment</h2>'+
						'<b style="font-weight:bold;">Delivered by Sadāshiva, received by Devi, adopted as the Cosmic Constitution by the maintainer, Vishnu, is Agama.</b><i> – Paramahamsa Nithyananda</i><br><br>'+
						'<b style="font-weight:bold;">Agama</b> literally means, that which has been bequeathed or ‘come down.’ They are an assemblage of scriptures of a gamut of Hindu devotional schools, with three main branches: Shaivism (of Lord Shiva), Vaishnavism (of Lord Vishnu) and Shaktism (of Adi Shakti). The Agama literature is humungous and includes: 28 Shaivagamass, 77 Shakta Agamas, which are also called ‘tantras’ (Hindu mystical texts), and 215 Vaishnava Agamas. But as Paramahamsa Nithyananda asserts, <b style="font-weight:bold;">“There are Agamas - Shakta Agamas, Vaishnav Agamas, Shaiva Agamas - but all Agamas non-controversially agree, that they have been delivered by Sadashiva.”</b><br><br>'+
						'Most of the plenipotentiaries, such as, Sanjukta Gupta, of the Hindu tradition asserted that the maxims of these Agamas brought out the true spirit of the Vedas (ancient scriptures, meaning, ‘to know’ or to have knowledge of). Agamas teach systematic methods of spirituality that involve worship in the form of rituals, pujas (acts of worship) and yajnas (a ritual sacrifice with a particular objective), but they also lay down the means to live the lifestyle of the Gods themselves.<br><br>' +
						'<b style="font-weight:bold;">Agama – The Shaastra Pramaana:</b><br>'+
						'<p style="text-align:center;">āgatāṃ śivavaktrebhyo gataṃ ca girijāmukhe ।<br>mataṃ hi vāsudevasya tasmādāgama ucyate ॥<br>~ svacchanda tantra</p>'+
						'“That which has come from Śiva’s mouth and directly heard and received by Devi Girijā (Pārvati), which has been ordained by Śri Vāsudeva (Viṣṇu) to govern the world, therefore that is called Āgama.”<br>The Agamas are forms of instructions from Shiva to Shakti and take their name from the first three letters of the words agatam (originated), gatam (fell) and matam (ordained) as mentioned in the shloka.'+
						'<h2>Shaivagamas – A Chronicle:</h2>The Agamas existed mostly in South India, in Tamil Nadu recorded on palm leaf manuscripts and preserved in the homes of Shivacharyas who were entrusted with organising and performing the pujas and rituals in the Shiva temples for several millenniums. They are in <i>grantha</i> script evolved by the Tamil people to preserve Sanskrit scriptures 1000s of years ago.<br>The Agamas saw their greatest revival soon after Adi Shankaracharya unified Sanatana Hindu Dharma, during the times of the Shaiva devout Chola rulers, from the 9th to 12th centuries CE.<br>A distinctive Shaiva Advaita philosophy took shape from the days of Thirumoolar and Karaikal Ammaiyar which was given a fresh life and a new direction by the Saiva Nayamars such as Sambanthar, Appar, Sundarar and Manikkavasagar. Under these saints, the Agamas flourished into temple building and temple worship from the 9th to the 13th centuries CE. The greatest exponent of this revival was the saint, Thirugnanasambanthar.<br><br>'+
						'While the Shaiva Agamas led to the Shaiva Siddhanta philosophy in Tamil-speaking regions of South-India, it gave rise to Kashmir Saivism in the Northern region of India i.e. in Kashmir.<br>'+
						'<h2>Kashmiri Shaivism</h2><p>The Agamas of Kashmiri Shaivism is also called the Trika Shastra. It centers mainly on the Trika system of maalinI, siddha and naamaka Agamas and venerates the triad Shiva, Shakti, Nara (the bound soul) and the union of Shiva with Shakti. The trika philosophy derives its name from the three shaktis, namely, paraa, aparaa and paraapara; and provides three modes of knowledge of reality, that is, non-dual (<i>abheda</i>), non-dual-cum-dual (<i>bheda-bheda</i>) and dual (<i>bheda</i>).<br>'+ 
						'The literature of Kashmiri Shaivism is divided under three categories: Agama Shaastra, Spanda Shaastra, and Pratyabhijna Shaastra. The founder of Kashmir Shaivism is Vasugupta who is said to have been revealed the Siva Sutras by a siddha. It is Abhinava Gupta however, who is considered to be the greatest theologian of Kashmir Shaivism.</p>'+
						'<h2>Role of Adi Shankaracharya</h2>Adi Shankaracharya travelled to Kashmir where he was initiated into the Shakta Agamic tradition by Abhinava Gupta, the great theologian, mystic, poet, musician, dramatist, logician of that region, 1000s of years ago. Adi Shankracharya integrated Shakta Srividya Sampradaya into the Vedanta Sampradaya.<br>'+ 
						'It is Adi Shankaracharya who should be credited for organising all traditions of Sanatana Hindu Dharma to its very core.'+
						'</p></div>',
					}]
				}
			],
			padding: 15
		},
		{
			title: "Scriptures",
			items:[
				{
					xtype:'menuscriptcategoryresult'
				}
			],
			padding: 15
		},
		{
			title: 'Books',
			//glyph:72,
			html:'<div>Site Under Construction</div>',
			padding: 15
		},
		{
			title: 'Search Results',
			items:[
				{
					xtype:'searchresult'
				}
			],
			padding: 15
		}
	],
	listeners:
	{
		added:{
			fn:function(t , container , index , eopts){
				t.getTabBar().setStyle("background-color: rgb(255, 255, 255);border:1px solid gray;font-size:14px;color:#000;font-style: bold;");
			}
		}
	}
});
