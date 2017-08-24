Ext.define('library.view.main.LibraryHome', {
    extend: 'Ext.tab.Panel',
    xtype: 'libraryhome',
	width: '100%',

	items:[
		{
			title: "Swamiji's Vision",
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
			title: 'Sanatana Axiom',
			html: '<div><div style="float:left;margin-right:20px;margin-bottom:20px;font-family:verdana;">'+
            '<p>Sanatana Dharma is is the original name of what is now popularly called Hinduism or Hindu Dharma.<br>'+
            'The terms Hindu and Hinduism are said to be a more recent development, while the more accurate term is Sanatana Dharma.<br>'+
            'It is a code of ethics, a way of living through which one may achieve moksha (enlightenment, liberation).<br>'+
            'It is the world\'s most ancient culture and the socio, spiritual, and religious tradition of almost one billion of the earth\'s inhabitants.<br>'+
            'Sanatana Dharma represents much more than just a religion; rather, it provides its followers with an entire worldview,<br>'+
            'way of life and with a coherent and rational view of reality.<br>'+
            '</div><div style="float:right;margin-left:10px;margin-top:5px;">'+
            '<h3>Sanatana Dharma Videos</h3><br><iframe width="260" height="200" src="https://www.youtube.com/embed/IdWZ2Svh7GI" frameborder="0" allowfullscreen></iframe></div></div>',
			padding: 15
		},
		{
			title: "Vedas & Agamas",
			html: '<div><div style="float:left;margin-right:20px;margin-bottom:20px;font-family:verdana;">'+
            '<p>The Agamas are a collection of scriptures of several Hindu devotional schools.<br>'+
            'The term literally means tradition or "that which has come down", and the Agama texts describe cosmology, epistemology, <br>'+
            'philosophical doctrines, precepts on meditation and practices, four kinds of yoga, mantras, temple construction, deity.<br>'+
            'worship and ways to attain sixfold desires.These canonical texts are in Sanskrit and in south Indian languages <br>'+
            'such as Tamil (written in Grantha script and Tamil script). The three main branches of Agama texts are those of <br>'+
            'Shaivism (Shiva), Vaishnavism (Vishnu), Shaktism (Devi). Agamic traditions are sometimes called Tantrism, <br>'+
            'although the term "Tantra" is usually used specifically to refer to Shakta Agamas.</div><div style="float:right;margin-left:10px;margin-top:5px;">'+
            '<h3>Veda Agama Videos</h3><br><iframe width="260" height="200" src="https://www.youtube.com/embed/kAypgra3m5g" frameborder="0" allowfullscreen></iframe></div></div>',
			padding: 15
		},
		{
			title: 'Gurukul - A Cognition Shift in Learning',
      html: '<div><div style="float:left;margin-right:20px;margin-bottom:20px;font-family:verdana;"><p>Creating leaders of the quantum intelligent civilization.<br>'+
      'Nurturing the children such that they blossom to their fullest potential,<br>'+
      'expressing their innate creativity, spontaneity, clarity and bliss is enlightened education.<br>'+
      'Not only does this education put them above par other children their age,<br>'+
      'it also leads to the awakening of their consciousness.<br>'+
      'eN-Education is based on consciousness, compassion, creativity and confidence.</p><br></div><div style="float:right;margin-left:10px;margin-top:5px;">'+
      '<h3>Nithyanada Gurukul Videos</h3><br><iframe width="260" height="200" src="https://www.youtube.com/embed/EvQiwwewp4s" frameborder="0" allowfullscreen></iframe></div></div>',
      padding: 15
		},
		{
			title: 'Shrutis & Smritis',
			html: '<div><div style="float:left;margin-right:20px;margin-bottom:20px;font-family:verdana;">'+
            '<p>Vedas are considered Shruti scriptures. Shruti scriptures have been heard unlike the Smriti <br>'+
            'scriptures which are remembered. Shruti scriptures are believed to be the record of the intuitive<br>'+
            'perception of Vedic Rishis of the Divine. Smriti scriptures have human authors and are considered <br>'+
            'to be commentaries on the Divine Vedas.Shruti scriptures include the 4 Samhitas, Brahmanas, Aranyakas<br>'+
            'and probably 108 Upanishads. Smriti scriptures include Itihasas like Ramayana and Mahabharata,Dharma Shastras,<br>'+
            'Nibandhas,Puranas,Agamas and Tantras,Darshanas and many other writings like Yoga Vasishtha and Panchatantra.</p><br></div><div style="float:right;margin-left:10px;margin-top:5px;">'+
            '<h3>Shrutis & Smritis Videos</h3><br><iframe width="260" height="200" src="https://www.youtube.com/embed/t0JftnvuwSU" frameborder="0" allowfullscreen></iframe></div></div>',
			padding: 15
		},
    {
			title: 'Other Resources',
			html: '<div><div style="float:left;margin-right:20px;margin-bottom:20px;font-family:verdana;">'+
            '<p>Agama Academy aims at providing internet based resources and opportunities to all <br>'+
            'those who are interested in acquiring knowledge on Agama Sastra which is the primary <br>'+
            'source and authority for worship, ritual, tradition, culture and temple construction.<br>'+
            'Agama Academy would actively employ both traditional methods and modern technology and <br>'+
            'ensure that the vast resource of knowledge and experience on Agama Sastra, one of the <br>'+
            'world\'s oldest living religious practices of Tamils, are preserved and made accessible <br>'+
            'for generations to come. <br>'+
            '<div style="float:left;margin-right:20px;margin-bottom:20px;font-family:Comic Sans MS;">Here is the link for your refrence - <a href=\'http://www.agamaacademy.org/\'>Agama Academy</a></p></div></div></div><br><br>'+
            '<div><div style="float:left;margin-right:20px;margin-bottom:20px;font-family:verdana;">'+
            '<p>Himalayan Academy provides documents about Kamikagama.Kamikagama is one of the <br>'+
            'longest Agamas followed by most of the temples in South India.It is looked up on as the feet of<br>'+
            'Siva. It deals with all the rituals from karshana (turning the sod) to pratishta <br>'+
            '(installation) of deities.The uttarablaaga deals with diksa, festivals etc.  <br>'+
            'So this is a complete manual for priests, laymen and for the inquisitive scholar  <br>'+
            'who wants to know the details and symbolism of Agamic worship, private and public. <br>'+
            '<div style="float:left;margin-right:20px;margin-bottom:20px;font-family:Comic Sans MS;">Here is the link for your refrence - <a href=\'https://www.himalayanacademy.com/view/kamika-agama_grantha/\'>Himalayan Academy</a></p></div></div></div>'

              ,
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
