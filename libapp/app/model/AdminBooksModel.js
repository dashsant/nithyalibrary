Ext.define('library.model.AdminBooksModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.otherbookmodel',

    stores:{

        mystore:{

        fields:['title', 'author1', 'author2', 'author3', 'author4', 'type', 'category', 'contributor1', 'contributor2', 'contributor3', 'contributor4', 'edition', 'numpages', 'isbn', 'source_url', 'saved_at_url'],
        data:{'items':[
			{
				title:"Sidhhant Shiromani", author:"Scott", source_url:"https://archive.org/details/SidhhantshiromaniSanskrit_201803", languages:1, type:1, 
				author1:'Person A', author2:'Person B', contributor1:[2], contributor2:[1,2,3]
			},
			{title:"Dwight", author:"Schrute", source_url:"http://dwight.book", type:1},
			{title:"Jim", author:"Halpert", source_url:"http://jim.script", type:2},
			{title:"Kevin", author:"Malone", source_url:"http://kevin.book", type:1},
			{title:"Angela", author:"Martin", source_url:"http://angela.script", type:2}
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