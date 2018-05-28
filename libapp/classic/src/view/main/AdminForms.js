Ext.define('Ext.ux.plugin.form.LabelRequired', {
	extend: 'Ext.AbstractPlugin',
	alias: 'plugin.formlabelrequired',
	asterisk: ' <span class="fa fa-asterisk" style="color:red;" data-qtip="Required"></span>',
	constructor: function () {
		var me = this;
		me.callParent(arguments);
	},
	init: function (formPanel) {
		formPanel.on('beforerender', this.onBeforeRender, this);
		//formPanel.on('afterrender', this.onBeforeRender, this);
	},

	onBeforeRender: function (formPanel) {
		var i, len, items, item;
		items = formPanel.query('[allowBlank=false]');
		for (i = 0, len = items.length; i < len; i++) {
			item = items[i];
			item.afterLabelTextTpl = (item.afterLabelTextTpl || "") + this.asterisk;
			item.labelClsExtra = ' x-form-required-field';
		}
	return true;
	},
	onAfterRender: function (formPanel) {
		var i, len, items, item;
		items = formPanel.query('[allowBlank=false]');
		for (i = 0, len = items.length; i < len; i++) {
			item = items[i];
			item.afterLabelTextTpl = (item.afterLabelTextTpl || "") + this.asterisk;
			item.labelClsExtra = ' x-form-required-field';
			item.updateLayout();
		}
	return true;
	}
});

Ext.define('Ext.ux.plugin.AfterLabelInfo', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.afterlabelinfo',

    init: function (cmp) {
        var me = this; // the plugin

        cmp.afterLabelTextTpl = [
            '<img src="resources/info-circle.svg"',
            ' class="x-ux-plugin-afterlabelinfo"',
            ' data-qtip="',
            Ext.util.Format.htmlEncode(me.qtip || ''),
            '">',
            '</img>'
        ].join('');
    }
});

Ext.define('Overrides.form.field.Base', {
    override: 'Ext.form.field.Base',
	/*
	initComponent: function() {
        var me = this;
        this.afterLabelTextTpl = new Ext.XTemplate(
            '<tpl if="this.allowBlank()">',
                '<span style = "color:red;"> *</span>',
            '</tpl>',
            {
                disableFormats: true,
                allowBlank: function(){
                   return me.allowBlank === false;
                }
            }
        );
        this.callParent(arguments);
    },
	
	
	afterRender: function(){
		var me = this,
			data = me.callParent(),
			labelClsExtra = me.labelClsExtra;
        if(this.allowBlank == false){ //append '*' for the required field
            if (this.rendered) {
                if(!this.el || !this.el.dom){ return; }
                var labelSeparator = this.labelSeparator;
                
                if (typeof labelSeparator == 'undefined') {
                    if (this.ownerCt && this.ownerCt.layout && 
                    typeof this.ownerCt.layout.labelSeparator != 'undefined') {
                        labelSeparator = this.ownerCt.layout.labelSeparator;
                    } else {
                        labelSeparator = '';
                    }
                }
                var formItem = this.el.up('.x-form-item', 10);                
                if (formItem) {
                    var label = formItem.child('.x-form-item-label');                
                    if (label) {
						console.log(label);
						label.update(this.fieldLabel + labelSeparator + 
                        '<span style=\"color:red; font-size:135%; position:relative; top:4px;\"> *</span>' );
						label.labelClsExtra = ' x-form-required-field' + me.requiredCls;
					}
                }
            
            } else {
                // nothing for now :)
            }
		}
	},*/
    getLabelableRenderData : function() {
        var me            = this,
            data          = me.callParent(),
            labelClsExtra = me.labelClsExtra;

        if (!me.allowBlank) {
            data.labelClsExtra = (labelClsExtra ? labelClsExtra + ' ' : '') + me.requiredCls;
			me.updateLayout();
        }

        return data;
    }
});


Ext.define('library.view.main.AdminForms', {
	extend: 'Ext.panel.Panel',
    xtype: 'adminforms',
	id: 'admincard',
	layout:'card',
    requires: [
		'library.view.main.LoginForm',
		'library.view.main.OtherForm'
    ],
	shrinkWrap:false,
	flex:1,
	width:'100%',
	height:'95%',
	items: [
		{ xtype:'loginform', itemId:'card-1', width:'100%', height:'100%', layout:{type:'vbox',align:'center', pack:'center'} },
        { xtype:'otherform', itemId:'card-2', width:'100%', height:'100%' }
    ],
	activeTab: 0
});