/**
 * This view is an example list of people.
 */
Ext.define('library.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
	title: {text: 'Login Form', cls:'form-class-title' },
	layout: 'anchor',
	id: 'loginFormId',
	requires: [
		'library.view.main.MainController'
	],
	controller: 'main',
    bodyPadding: 5,
	width: '100%',
    height: '100%',
    // The form will submit an AJAX request to this URL when submitted
    url: 'http://localhost:3000/login',
    defaults: {
		cls: 'form-class'
    },
	fieldDefaults:{
		margin:'15 0 0 0',
		ancjor:'100%'
	},
	items:[{
		layout: {
			type: 'vbox',
			align: 'center',
			pack: 'center'
		},
		width: '100%',
		height:'90%',
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'Username',
			allowBlank: false,
			style: 'font-size:18;color:#fff;font-weight: bold;',
			value: 'RajaRajeshwari'
			}, {
				xtype: 'textfield',
				name: 'password',
				inputType: 'password',
				fieldLabel: 'Password',
				allowBlank: false,
				style: 'font-size:18;color:#fff;font-weight: bold;',
				value: 'Sundareshwara'
			}, {
				xtype: 'displayfield',
				hideEmptyLabel: false,
				value: 'Enter any non-blank password'
			}
		]
	}],
	// Reset and Submit buttons
	buttons: [{
			text: 'Reset',
			style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;',
			handler: 'loginResetHandler'
		}, {
			text: 'Submit',
			formBind: true, //only enabled once the form is valid
			disabled: true,
			style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;',
			handler: 'loginSubmitHandler'
	}]

});
