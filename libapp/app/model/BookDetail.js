Ext.define('library.model.BookDetail', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'title',  type: 'auto'},
        {name: 'subject',   type: 'auto'},
		{name: 'author',   type: 'auto'},
		{name: 'abstract',   type: 'auto'},
        {name: 'script', type: 'auto'},
        {name: 'url', type: 'auto'}
    ]

});