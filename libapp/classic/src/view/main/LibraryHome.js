Ext.define('library.view.main.LibraryHome', {
    extend: 'Ext.tab.Panel',
    xtype: 'libraryhome',
	width: '100%',
	height: '99%', //800
	tabPosition:'left',
	tabRotation:0,
	ui: 'navigation',
	border: false,
	tabBar: {
        border: false
    },
    requires: [
		'library.view.main.SearchResult',
		'library.view.main.MenuscriptCategoryResult',
		'library.view.main.BookResult',
    ],
	items:[
		{
			title: "Who is the Avatar",
			items:[{
				xtype:'container',
				layout:{type:'hbox',align:'fit'},
				width: '100%',
				items: [
					{xtype: 'container',width:'100%',margin:'0',padding:'0 12 0 12',
					 html:'<div style="line-height:1.4;text-align:justify;font-size:14px"><p>Paramahamsa Nithyananda is revered, regarded, respected and worshipped as The Avatar (living incarnation as per Hinduism) of super-consciousness by millions across the globe. He is the spiritual head of the Mahanirvani Peetha, oldest and largest apex body of Hinduism, and three time Guinness World Records® record holder. He and his <i>Sangha</i> (spiritual community) around the globe are serving humanity by reviving the Science of Completion℠, Science of Enlightenment℠ and manifesting various extraordinary spiritual powers as per the Vedic Agamic tradition of Sanatana Hindu Dharma. He is the author of 300 books, which are translated and published in 500 titles and various international languages. <br><br>His Sangha has a strong presence worldwide through numerous Temples, <i>Adheenams</i> (Temple monastery complex), <i>Gurukuls</i> (Vedic schools), universities, goshalas (cow shelters). His live <i>Satsangs</i> (spiritual discourses) are viewed every morning (8pm IST) by people from all countries around the world.'+
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
					layout: {type: 'hbox',align:'fit'},
					shrinkWrap:false,
					flex:1,
					width:'100%',
					height:'85%',
					scrollable: true,
					autoScroll: true,
					items: [
						{xtype: 'container',width:'75%',margin:'0',padding:'0 12 0 12',
						 bodyStyle: { minHeight: '840px',height:'840px',overflow:'auto' },
						 autoScroll: true,
						 listeners: {
							render: function() {
								var me = this;
								me.setHeight(window.innerHeight - 260);
							}
						},
						 html:'<div style="line-height:1.4;text-align:justify;font-size:14px"><p>A civilisation is made up of its Gods, Scriptures, rituals and tenets that are lived. These aspects provide the <i>vatavarana</i> (environment) where human beings flourish in whichever dimension of life they are passionate about. Sanatana Hindu Dharma is the oldest'+' living civilisation on planet earth. This glorious civilisation has about 1,000,000 source books. One source book is sufficient for a religion to emerge. For most of'+' these books, there are <i>bhashyas</i> (commentaries), <i>thikas</i> (commentaries on commentary), and <i>varthikas</i> (commentaries on thikas). Imagine the richness of this tradition.<br><br>'+
						 'In this digital age, Sanatana Hindu Dharma is hardly understood even by Hindus as the amount of digitization of Hindu scriptures is a very small percentage of what is even'+ 'available or known. Translation of our scriptures to commonly used languages of this day is another issue in accessing these treasures of our ancient and ever-relevant wisdom.<br><br> '+
						 'It is very unfortunate; Hindus spend so much money on building temples, but we don’t spend even pennies on building libraries , because we don’t care about knowledge.  This is also one reason why we have become weak.  The reason for why we have been weakened is we spend so much money on building temples and not enough on libraries. <br><br>'+
						 'I want educating organizations, educational tools, knowledge transmission methodologies, knowledge transmission apparatus, knowledge transmission systems to be available.  I want that. The “Nithyananda Hinduism Library”, is a step to start addressing these issues.<br>'+
						 '<h2>Shastra Pramana</h2>'+
						 '<b>The 16th Chapter of Bhagavad Gita, 24th Shloka says:</b>'+
						 '<p style="text-align:center">ThasmaathShaasthramPramaanam they kaaryaakaaryavyavasthithau |<br>'+
						 'Jnaathvaashaasthravidhaanoktham karma karthumihaarhasi||</p>'+
						 '‘Therefore let the scriptures be the authority in determining what ought to be done and what ought not to be done; having known what is said in the ordinance of the scriptures, thou should act here in this world.’<br><br>'+
						 'This verse, the 16th Chapter, 24th Shloka, is the Vision Statement for Antharjaala Aamnaya Sarvajna Peetha . I will have at least few hundred pundits and Swamis sitting and running this Sarvajna Peetha, making really Hinduism as simple and as practical, as beautiful and liveable as possible.<br><br>'+
						 'In all our ashrams, the Grantha Samadhi will be worshipped.  Don’t think the worship concept was created just for maintenance.  No.  When I say worship, WORSHIP them.  Feel they are Gods, they are the embodiments of God – Vyasa and Goddess Saraswathi – and worship them to give you the right knowledge and guidance about life.<br><br> '+
						 'All our Jnanalayas will be called as ‘Grantha Samadhis’.  From none of our libraries, books can be removed.  We will also have an Internet Library corner.  Millions and millions of Hindu scriptures, spiritual scriptures which are available digitised version will be downloaded and kept for the reference purposes. People can use those computers and refer. Even though we have digitised version, we will have hard copies. The traditional Grantha Samadhi will be created and maintained.'+
						 '<h3>3rd Verse of 16th Chapter in Bhagavad Gita says:</h3>'+
						 '<p style="text-align:center">Yah shaastravidhimuthsrijyavarthatheykaamakaarathaha |<br>'+
						 'Na sasiddhimavaapnothinasukhamnaparaamgathim ||</p>'+
						 '‘But he who discards the scriptural injunctions and acts according to his own whims, attains neither perfection nor happiness nor the supreme destination.’<br><br>'+
						 'This Grantha Samadhi and SarvajnaPeetha, as these two projects are very close to my heart and my pet projects, I have personal interest in this project, I myself will directly do this project.  These two I will directly involve myself and do it, because these two are closest to my heart to keep the tradition alive.  These two are the projects of Naimisharanya.   Please understand, in those days, anybody has any of these kind of conflicts, problems, questions, they will go to Naimisharanya where all the scriptures are stored, and the rishis who have read all the scriptures are available who will refer immediately to the scriptures and give the answer to them, to the visitors.  This is the Naimisharanya Project, reviving the Naimisharanya, the SarvajnaPeetha.<br><br>'+ 
						 'I was sitting and spending some time with various manuscripts. I thank, sincerely, the Agama Academy and the Shivacharyas who are running the Agama Academy, especially Ravi Vidyanatha Shivacharya for his amazing contribution, collecting, scanning, preserving, all the manuscripts related to Agamas, collecting, scanning, preserving all the manuscripts related to agama and ancient scriptures, and his broad-mindedness to share everything with us; he has done amazing work, almost literally every night I am spending time with his collections. They have done an unimaginable work. Collecting almost 50,000 manuscripts and making everything about Agama available. '+
						 '<h2>Soft Power New-Clear Bomb</h2>'+
						 'I was going through, I felt one leaf is enough, each leaf of that manuscript is the soft-power nuclear bomb! Understand, you all know only hard power atomic bomb which is used to control people with the fear, you show the bomb, “if you don’t listen, I’ll throw this bomb,” that’s the hard power; but each of these palm leaf is a soft power atom bomb- you just throw that on one country, they are there forever with devotion and respect out of gratitude, love, respect, surrender! They are there forever because, so much is contributed to their life.<br><br>'+
						 'Each palm leaf, each manuscript, each leaf, God; what a detailed work Mahadeva has done. Agamas should have become the book of Hinduism. I am bold enough to declare - for all the lifestyle issues, social issues, how we should conduct ourselves in society, in the way of liberated thinking, how we should live, everything, Agamas should have become the scripture, because, no other master has the courage to think or the clarity to think to this depth than Mahadeva.'+
						 '<h2>Dedicating my Life to spread Agamas</h2>'+
						 'People may raise a doubt, “How do you know it was written by Mahadeva? Or somebody wrote and attributed to Mahadeva’s name?” Any brain which can think to this depth with this understanding, that person has already become Mahadeva, he has achieved Shiva Consciousness, so you don’t have to worry if it was written by Mahadeva with four arms under the banyan tree, Uma at His side, with Damaru in His hand, or Mahadeva who happened as Thirumoolar, or Mahadeva who entered into some Rishi’s system; from whichever consciousness, whichever brain, I know for 120% sure, they became Mahadeva, it’s only from Him these things can come out! God! I just feel like I should dedicate My whole life to do research, organizing, collecting, living and spreading, radiating, Agamas. And, I have decided to do that. No doubt, Upanishads are the first, but Agamas are the minutest. Upanishads made user friendly is Agamas. In next few days, you will continue to get the soft power nuclear bombs, the Agamas, to enrich your life and realize what these Upanishads are telling; whatever Upanishads declare, Agamas makes it as lifestyle.<br><br>'+
						 'Understand, unfortunately, the original source was not available popularized to the world. It is time. When the original scriptures, Vedas, were hidden into the ocean by the demon Hiranya, Varaha Avatara happened. Vishnu took the incarnation and brought those scriptures out and revealed it to the world. Now it is my responsibility - collecting it from all the corners of the world wherever it was secretly lying, the original agamas, the yogic scriptures and gathering it, revealing it to the whole world and making it available to the whole world through the internet. We are successful in collecting more than 3 Terabyte original material on Yoga – Revelations by Sadashiva. And we are scanning everything, cleaning it up. We are ready with original material – scanned palm leaves – revelations about Yoga by Sadashiva and his direct disciples. We will offer this to the whole world copyright free. You have a right to copy. I am declaring it as copyright free. If you are copying, not only are you welcome, you are celebrated.<br><br>'+
						 'And bowing down to Sadashiva, surrendering at His feet and all His disciples and all the great people, beings involved in keeping this whole knowledge experience current and alive on the planet earth, bowing down to all of them, surrendering at all their feet, I am revealing, whatever is shared by them and kept alive till now on the planet earth, to all of you back again. Now it is in the form of the original palm leaf scanned. Soon you can expect the various language translations of these scriptures. Please wait for all those translations. It will be soon available to all of you. But the original scriptures are shared with you all today through this digital library.<br><br>'+
						 'More than 3 Terabytes of manuscripts had been collected so far and are being processed and more is being acquired, researched and made available to the world. This will foster deeper learning of our wisdom and tradition and pave the way for the conscious expansion of human beings; which is the sole purpose of life on this planet. '+
						 'My blessings to the team that has put together this work.<br><br>My blessings to those who have donated generously for this cause.'+
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
					height:'85%',
					scrollable: true,
					autoScroll: true,
					items:[{
						xtype: 'container',width:'99%',margin:'0',padding:'0 12 0 12',
						bodyStyle: { minHeight: '840px',height:'840px',overflow:'auto' },
						autoScroll: true,
						listeners: {
							render: function() {
								var me = this;
								me.setHeight(window.innerHeight - 260);
							}
						},
						html:'<div style="line-height:1.4;text-align:justify;font-size:14px;"><p>'+
						'<h2>Vedagamas – The Complete Process for Completion & Enlightenment</h2>'+
						'<b style="font-weight:bold;">Delivered by Sadāshiva, received by Devi, adopted as the Cosmic Constitution by the maintainer, Vishnu, is Agama.</b><i> – Paramahamsa Nithyananda</i><br><br>'+
						'<b style="font-weight:bold;">Agama</b> literally means, that which has been bequeathed or ‘come down.’ They are an assemblage of scriptures of a gamut of Hindu devotional schools, with three main branches: Shaivism (of Lord Shiva), Vaishnavism (of Lord Vishnu) and Shaktism (of Adi Shakti). The Agama literature is humungous and includes: 28 Shaivagamass, 77 Shakta Agamas, which are also called ‘tantras’ (Hindu mystical texts), and 215 Vaishnava Agamas. But as Paramahamsa Nithyananda asserts, <b style="font-weight:bold;">“There are Agamas - Shakta Agamas, Vaishnav Agamas, Shaiva Agamas - but all Agamas non-controversially agree, that they have been delivered by Sadashiva.”</b><br><br>'+
						'Most of the plenipotentiaries, such as, Sanjukta Gupta, of the Hindu tradition asserted that the maxims of these Agamas brought out the true spirit of the Vedas (ancient scriptures, meaning, ‘to know’ or to have knowledge of). Agamas teach systematic methods of spirituality that involve worship in the form of rituals, pujas (acts of worship) and yajnas (a ritual sacrifice with a particular objective), but they also lay down the means to live the lifestyle of the Gods themselves.<br><br>' +
						'<b style="font-weight:bold;">Agama – The Shaastra Pramaana:</b><br>'+
						'<p>āgatāṃ śivavaktrebhyo gataṃ ca girijāmukhe ।<br>mataṃ hi vāsudevasya tasmādāgama ucyate ॥<br>~ svacchanda tantra</p>'+
						'“That which has come from Śiva’s mouth and directly heard and received by Devi Girijā (Pārvati), which has been ordained by Śri Vāsudeva (Viṣṇu) to govern the world, therefore that is called Āgama.”<br>The Agamas are forms of instructions from Shiva to Shakti and take their name from the first three letters of the words agatam (originated), gatam (fell) and matam (ordained) as mentioned in the shloka.'+
						'<h2>Shaivagamas – A Chronicle:</h2>The Agamas existed mostly in South India, in Tamil Nadu recorded on palm leaf manuscripts and preserved in the homes of Shivacharyas who were entrusted with organising and performing the pujas and rituals in the Shiva temples for several millenniums. They are in <i>grantha</i> script evolved by the Tamil people to preserve Sanskrit scriptures 1000s of years ago.<br>The Agamas saw their greatest revival soon after Adi Shankaracharya unified Sanatana Hindu Dharma, during the times of the Shaiva devout Chola rulers, from the 9th to 12th centuries CE.<br>'+
						'A distinctive Shaiva Advaita philosophy took shape from the days of Thirumoolar and Karaikal Ammaiyar which was given a fresh life and a new direction by the Saiva Nayamars such as Sambanthar, Appar, Sundarar and Manikkavasagar. Under these saints, the Agamas flourished into temple building and temple worship from the 9th to the 13th centuries CE. The greatest exponent of this revival was the saint, Thirugnanasambanthar.<br><br>'+
						'While the Shaiva Agamas led to the Shaiva Siddhanta philosophy in Tamil-speaking regions of South-India, it gave rise to Kashmir Saivism in the Northern region of India i.e. in Kashmir.<br>'+
						'<h2>Kashmiri Shaivism</h2>The Agamas of Kashmiri Shaivism is also called the Trika Shastra. It centers mainly on the Trika system of maalinI, siddha and naamaka Agamas and venerates the triad Shiva, Shakti, Nara (the bound soul) and the union of Shiva with Shakti. The trika philosophy derives its name from the three shaktis, namely, paraa, aparaa and paraapara; and provides three modes of knowledge of reality, that is, non-dual (<i>abheda</i>), non-dual-cum-dual (<i>bheda-bheda</i>) and dual (<i>bheda</i>).<br>'+ 
						'The literature of Kashmiri Shaivism is divided under three categories: Agama Shaastra, Spanda Shaastra, and Pratyabhijna Shaastra. The founder of Kashmir Shaivism is Vasugupta who is said to have been revealed the Siva Sutras by a siddha. It is Abhinava Gupta however, who is considered to be the greatest theologian of Kashmir Shaivism.'+
						'<h2>Role of Adi Shankaracharya</h2>Adi Shankaracharya travelled to Kashmir where he was initiated into the Shakta Agamic tradition by Abhinava Gupta, the great theologian, mystic, poet, musician, dramatist, logician of that region, 1000s of years ago. Adi Shankracharya integrated Shakta Srividya Sampradaya into the Vedanta Sampradaya.<br>'+ 
						'It is Adi Shankaracharya who should be credited for organising all traditions of Sanatana Hindu Dharma to its very core.'+
						'<h2>Delving into the Shaivagamas</h2>The Shaivagamas, also known as Shaiva Siddhanta Shastras (or the Shaivagamas) in Sanskrit, are replete with mantras, techniques and practices to aid in transcending individuals from a lower to a higher state of consciousness. These scriptures reveal the exact nature of Pati (the Supreme Protector) and the souls that are bound which make known the exact nature of transcendental Parashiva (the Absolute which is beyond comprehension).'+
						'The Shaiva Siddhanta Shastras have been revealed by Lord Shiva to constitute the final and well ascertained conclusive principles that should be accepted or discarded. Lord Shiva has five faces, and each of these five faces revealed different scriptures of the 28 Shaivagamas. The faces are:<ul>'+ 
						'<li><strong>Sadyojata</strong> (that which gives both happiness and sadness to creatures),</li>'+ 
						'<li><strong>Vama</strong> (aspect of Lord Shiva that is peaceful, poetic and graceful),</li> '+
						'<li><strong>Aghora</strong> (represents the rejuvenating and dissolving qualities of Lord Shiva),</li> '+
						'<li><strong>Tatpurusha</strong> (represents the supreme soul behind the physical being) and </li>'+
						'<li><strong>Isana</strong> (form associated with akash or ether).</li></ul> '+
						'The Shaivagamas were directly delivered by Lord Shiva to Devi and to some of the sages who were adherents of the Shaivite order, such as Kaushika, Kashyapa, Bharadvaja, Agastya and Gautama. Each Shaivagama upholds a particular set of instructions, be it for priests who want to conduct homas and pujas, or for people who want to live the lifestyle of Lord Shiva and who want to strengthen the connection with Him. These Agamas are also meant for those who strive for enlightenment, or simply for those individuals who wish to follow Lord Shiva’s dictums and live His very life.<br><br>'+ 
						'Of the Shaivagamas, the Kamika Agama is the foremost scripture that came out of the Sadyojata face, and was directly uttered by Lord Shiva to Devi and a Sapta Rishi (Kaushika) on Mount Meru in Ujjain, India. He in turn transmitted it to 3 more sages. Thus began the flowering of a unique and divine culture ensconced in the Hindu-Vedic tradition that set forth ways and means to practice living with the ultimate super-consciousness.<br><br>'+
						'As Paramahamsa Nithyananda says about the Kamika Agama, “It is the only spiritual inner science to manifest anything one wants as reality.”<br><br>'+
						'<strong>What do the Agamas Contain?</strong><br><br>The Agamas elaborate 4 paths called <i>paadas</i>, namely:<br><br>'+
						'1.	<i>Carya Paada</i> which details praayashcitta vidhi (atonement), pavitra vidhi (purification), shivalinga lakshanam (chacteristics of a shivalinga), japam, yogapatta lakshanam (characteristics of meditation with a maala and yogapattam used in yogic postures)<br>'+
						'2.	<i>Kriya Paada</i>, which details mantra uddaaranam (elevation with mantra), sandhyaavandanam (twilight salutation), puja, japa, homas (worship, chanting, rites), samaya vishesha nirvana achaarya abhisheka (initiation into the spiritual stages). It also includes rules for construction of temple; design principles for sculpting, carving, and consecration of idols of deities for worship in temples <br>'+
						'3.	<i>Yoga Paada</i>, tells about the 36 tattvas, tattveshvara, yama, niyama, asana, samaadhi procedures – in other words, the precepts of yoga, the physical and mental discipline<br>'+
						'4.	<i>Jnana Paada</i>, also called Vidya Paada, details the characteristics of pati, pashu, pasha – the doctrine, the philosophical and spiritual knowledge and knowledge of reality & liberation.<br><br>'+
						'Each of the 28 Shaivagamas have these four part, although the order and name could change. These four are the worship procedures prescribed to devout Shaivites.<br><br>' +
						'The Agamas state three requirements for a place to be a center for pilgrimage: sthala, tirtha, and murti. Sthala refers to the place of the temple, Tīrtha is the temple tank, and Murti refers to the image of the deity. Elaborate rules are laid out in the Agamas for shilpa (the art of sculpture) describing the quality requirements of the places where temples are to be built, the kind of images to be installed, the materials from which they are to be made, their dimensions, proportions, air circulation, lighting in the temple complex, etc. The Manasara and Silpasara are some of the works dealing with these rules. '+
						
						'<h2>Vedas & Agamas</h2>'+
						'Paramahamsa Nithyananda elaborates, “Vedas are the ultimate, superior authority for the Hindus. Vedas are like a pure science, where the ultimate truths are explained, but Agamas are the scriptures where the applied technology, the applied science is expanded. All the Hindu bodies, be it the Kashi Vidvat Sabha or the Akhada Parishad, accept Vedas and Agamas as Shruti. Vedas and Agamas, Vedagamas are given the status of Shruti and everything else follows like a Smriti and they have their own status and respect. <br><br>'+
						'Agamas are directly revealed by Sadashiva; more like a practical manual of how to, what to, where to, when to. All these detail is answered with the right context, giving enough of understanding in a more sympathetic, compassionate way, with a lot of concern for human beings.”<br><br> '+
						
						'This makes the Agamas tremendously user-friendly, with no threats of any kind. Anyone following Agamas and Agamic way of life is only given completion and prayaschitta and not condemnation as happens in certain religious faiths. In the Agamas, even animals, if they ask for it, have to get initiation from a Guru, Sadashiva. Which is why one will read stories in Hindu scriptures of this ant or that elephant worshipping Sadashiva and becoming enlightened. In fact, all LIVING BEINGS and all genders, are given possibility in Agamas for initiation by Sadashiva. <br><br>'+
						'Besides the Agamas there are Upagamas, which are Agamas in an expanded way. Upagamas run into nearly 1000 numbers. The Agamas serve as practical manuals. Take for example the Kamika Agama - this Agama gives how Ganesha should be worshiped, how Shiva should be connected, or how a devotee should connect with Devi. The Upagama of this part of the Kamika Agama, takes it up and organises it.  For e.g. if a temple has seven Ganeshas, then the Ganesha puja has to be repeated for all seven of them. Being so minutely detail oriented in every aspect of rituals and worship, the Upagamas runs into atleast 2 crore verses which are available to us today.<br><br>'+
						'The Vedas were definitely much larger in number – there were 1000s of Shakhas or branches, however a lot of it is not available to us now. But a very large body of Agamas are available, therefore making it the largest body of Hindu scriptures available to mankind.<br><br>'+
						
						'<h3>Not Simply Agamas – They are Vedagamas</h3>'+
						'“Agamas are not a separate set of scriptures. Within the Vedas itself, from Shiva Samhita starts the whole Agama.” … Paramhamasa Nithyananda.<br>'+
						'Therefore, one cannot separate the two as Vedas and Agamas and must refer to them together as Vedagamas; because what is accepted as Vedas in Shiva Samhita, Agama starts there, in the Shiva Samhita. '+
						'Scholars on the Agamas have this to say about Vedagamas. The heritage of the Agamas, states Krishna Shivaraman, was the "Vedic piety maturing in the monism of the Upanishads presenting the ultimate spiritual reality as Brahman and the way to realizing as portrayed in the Gita". David Smith remarks, that, "a key feature of the Tamil Saiva Siddhanta … is that its source lies in the Vedas as well as the Agamas, in what it calls the Vedagamas. This school\'s view can be summed up as, “The Veda is the cow, the true Agama its milk. — Umapati”.<br><br>'+
						
						'<h3>Agamas Are Scientific</h3>'+
						'Science is about verifying, testing and showing results. There are two requirements for science. It should be based on some theoretical frame work (which is fulfilled by the the Shaastra) which says if you cause this, this will be the effect.  If you do this, this is going to be that result. Agamas too says the same thing. <br><br>'+
						'“Agama says you must do these procedures you’ll get these results.” … Paramahamsa Nithyananda. So it satisfies the first requirement of science. Second requirement is that you should be able to test and verify whether it really works. So if somebody says they’re Hindu, they really cannot deny the importance of Agama, as a verifiable Shaastra and cannot down-play the importance of what you are doing because you are reviving, rediscovering these, testing them.<br><br>'+
						'Therefore, the practices, rituals, symbols, the intricate elaborate practices could be considered similar to modern technology – like the protocols when setting up Wi-Fi and so on whose needs an engineer will understand very well but a lay person using the technology will not see its relevance.<br><br>'+
						'<h3>Works that Evolved from the Agamas</h3>'+
						'The Agamas in turn led to the development of many auxiliary texts based on them, by learned scholars. These were called the Ashta Prakarna and interestingly all the authors of these texts are from Kashmir. These texts focus on the Nyaya Paada of the Agama.<br><br>'+
						'<table border="1" cellspacing="0" cellpadding="2"><tbody><tr><td width="57"><p><strong>Sl. No.</strong></p></td><td width="227"><p><strong>Name of the Text</strong></p></td><td width="182"><p><strong>Author</strong></p></td></tr><tr><td width="57"><p>1</p></td><td width="227"><p>Tattva Prakaashika</p></td><td width="182"><p>Bhojadeva</p></td></tr><tr><td width="57"><p>2</p></td><td width="227"><p>Tattva Sangraha</p></td><td width="182"><p>Sadyojyoti</p></td></tr><tr><td width="57"><p>3</p></td><td width="227"><p>Tattva Traya Nirnayam</p></td><td width="182"><p>Sadyojyoti</p></td></tr><tr><td width="57"><p>4</p></td><td width="227"><p>Ratna Trayam</p></td><td width="182"><p>Shrikantha</p></td></tr><tr><td width="57"><p>5</p></td><td width="227"><p>Boga Kaarika</p></td><td width="182"><p>Sadyojyoti</p></td></tr><tr><td width="57"><p>6</p></td><td width="227"><p>Naada Kaarika</p></td><td width="182"><p>Bhatta Ramakantha</p></td></tr><tr><td width="57"><p>7</p></td><td width="227"><p>Mokha Kaarika</p></td><td width="182"><p>Sadyojyoti</p></td></tr><tr><td width="57"><p>8</p></td><td width="227"><p>Paramokha Niraacha Kaarika</p></td><td width="182"><p>Sadyojyoti</p></td></tr></tbody></table><p>&nbsp;</p>'+

						'The other series of texts that evolved out of the Agamas were the Paddhathis. These are quick-reference manuals that bring out the applications that would be useful in rituals. These texts are focused on the Cariya and Kriya Paada parts of the Agamas. There are several well known paddhathi manuals. But the most well known are those by Somashambhu and Aghora Shivam. '+
						'<br></p>',
					}]
				}
			],
			padding: 15
		},
		{
			title: "Scriptures",
			layout: {type: 'vbox',align:'fit'},
			shrinkWrap:false,
			flex:1,
			width:'100%',
			height:'80%',
			xtype: 'menuscriptcategoryresult',width:'99%',margin:'0 12 0 0',
			padding: 15
		},
		{
			title: 'Books',
			items:[{
				xtype:'container',
				layout: {type: 'vbox',align:'fit'},
				shrinkWrap:false,
				flex:1,
				width:'100%',
				height:'85%',
				scrollable: true,
				autoScroll: true,
				items:[{
					xtype:'bookresult',width:'99%',margin:'0 12 0 0'

				}]
			}],
			padding: 15
		},
		{
			title: 'Search Results',
			items:[
				{
					xtype:'container',
					layout: {type: 'vbox',align:'fit'},
					shrinkWrap:false,
					flex:1,
					width:'100%',
					height:'70%',
					items:[{
						xtype:'searchresult',width:'99%',margin:'0 12 0 0'
					}]
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
