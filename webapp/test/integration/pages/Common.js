sap.ui.define(['sap/ui/test/Opa5'], function(Opa5) {
    'use strict';

    return Opa5.extend('ui5.futureview.test.integration.pages.Common', {
        iStartTheApp: function() {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: 'ui5.futureview',
                    async: true,
                },
            });
        },

        iTeardownTheApp: function() {
            this.iTeardownMyUIComponent();
        },
    });
});
