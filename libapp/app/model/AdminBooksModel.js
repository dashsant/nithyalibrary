Ext.define('library.model.AdminBooksModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.otherbookmodel',

    stores:{

        mystore:{

        fields:['type',
				'roman_script_title', 
				'original_script_title', 
				'author1', 'contributor1',
				'author2', 'contributor2',
				'author3', 'contributor3',
				'author4', 'contributor4', 
				'languages', 
				'book_category', 
				'book_publishers', 'book_published_year',
				'book_numpages', 'book_description',
				'book_metadata', 'book_isbn13',
				'book_isbn',  'book_is_copyrighted',
				'book_copyright_year', 'book_edition',
				'book_price', 
				'manuscript_script', 'manuscript_material', 
				'manuscript_scribe', 'manuscript_institute', 
				'manuscript_folios_in_bundle', 'manuscript_condition', 
				'manuscript_folios_in_text', 'manuscript_text_range', 
				'manuscript_lines', 'manuscript_length', 
				'manuscript_width', 'manuscript_beginning_line', 
				'manuscript_ending_line', 'manuscript_notes', 
				'manuscript_remarks',
				'source_url', 'saved_at_url'],
        data:{'items':[
			{
				roman_script_title:"Sidhhant Shiromani", author1:"Scott", source_url:"https://archive.org/details/SidhhantshiromaniSanskrit_201803", languages:1, type:1, 
				author1:'Person A', author2:'Person B', contributor1:[2], contributor2:[1,2,3]
			},
			{roman_script_title:"Dwight", author1:"Schrute", source_url:"http://dwight.book", type:1},
			{roman_script_title:"Jim", author1:"Halpert", source_url:"http://jim.script", type:2},
			{roman_script_title:"Kevin", author1:"Malone", source_url:"http://kevin.book", type:1},
			{roman_script_title:"Angela", author1:"Martin", source_url:"http://angela.script", type:2}
        ]},

        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'items'
            },
            writer: {
                type: 'json',
                writeAllFields: false,
                root: 'items'
            },
        }
       }

    }
});