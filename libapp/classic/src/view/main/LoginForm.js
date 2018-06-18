Ext.define('library.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
	title: {text: 'Login Form', cls:'form-class-title' },
	layout: 'anchor',
	id: 'loginFormId',
    bodyPadding: 5,
	width: '100%',
    height: '100%',
    defaults: {
		cls: 'form-class'
    },
    requires: [
		'library.view.main.MainController'
	],	
	controller:'main',
	viewModel: 'login',
	fieldDefaults:{
		margin:'15 0 0 0',
		anchor:'100%'
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
			fieldLabel: 'Username',
			allowBlank: false,
			style: 'font-size:18;color:#fff;font-weight: bold;',
			bind:'{reviewer}'
			}, {
				xtype: 'textfield',
				inputType: 'password',
				fieldLabel: 'Password',
				allowBlank: false,
				bind:'{password}',
				style: 'font-size:18;color:#fff;font-weight: bold;'
			}, {
				xtype: 'displayfield',
				hideEmptyLabel: false,
				value: 'Enter any non-blank password'
			}
		]
	}],
	// Reset and Submit buttons
	buttons: [
		{
			text: 'Reset',
			style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;',
			handler: function() {
				this.up('form').getForm().reset();
			}
		}, 
		{
			text: 'Submit',
			formBind: true, //only enabled once the form is valid
			disabled: true,
			style: 'background-color: rgb(141, 67, 54);font-size:18;color:#fff;font-weight: bold;',
			handler:'loginHandler'
		}
	]

});
