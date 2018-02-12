/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('library.view.main.AppViewport', {
    extend: 'Ext.Viewport',
    xtype: 'app-viewport',
	id:'app-viewport',
	scrollable:true,
	layout:'fit',
	height:'100%',
	width:'100%',
    requires: [
        'library.view.main.Main'

    ],
    layout: 'vbox',
    items: [{
			xtype:'app-main'
		}
	]

});
