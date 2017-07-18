Ext.define('library.store.CatalogSearchResult', {
    extend: 'Ext.data.Store',

    alias: 'store.searchresult',

    fields: [
        'title', 'subject', 'script','url'
    ],

    data: { items: [
        { title: 'Jean Luc', subject: "jeanluc.picard@enterprise.com", script: "555-111-1111", url: ['a' , 'b'] },
        { title: 'Worf',     subject: "worf.moghsson@enterprise.com",  script: "555-222-2222", url: ['a' , 'b'] },
        { title: 'Deanna',   subject: "deanna.troi@enterprise.com",    script: "555-333-3333", url: ['a' , 'b'] },
        { title: 'Data',     subject: "mr.data@enterprise.com",        script: "555-444-4444", url: ['a' , 'b'] }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});