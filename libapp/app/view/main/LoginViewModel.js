/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('library.view.main.LoginViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.login',
    id: 'loginmodelid',
    data: {
		reviewer:'RajaRajeshwari',
		password:'Sundareshwara',
    },
    formulas: {
        // We'll explain formulas in more detail soon.
        sourceUrlHtml: function (get) {
            var url = get('url');
            return "<a href='" + url + "' target='_blank'>" + "Preview URL" + "</a>";
        }
    }
});

