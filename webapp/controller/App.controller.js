sap.ui.define(['ui5/futureview/controller/BaseController', 'sap/m/MessageToast'], function(
    BaseController,
    MessageToast
) {
    'use strict';

    return BaseController.extend('ui5.futureview.controller.App', {
        /*
         * Lifecycle Methods
         */

        /**
         * Lifecycle method onInit
         * @public
         */
        onInit: function() {
            console.log('onInit');
        },
        /**
         * Lifecycle method onBeforeRendering
         * @public
         */
        onBeforeRendering: function() {},

        /**
         * Lifecycle method onAfterRendering
         * @public
         */
        onAfterRendering: function() {},

        /**
         * Lifecycle method onExit
         * @public
         */
        onExit: function() {},

        /*
         * Event Handler
         */

        /*
         * TODO
         */
        onPress: function(oEvent) {
            let oItem = oEvent.getSource();
            let oRouter = this.getOwnerComponent().getRouter();

            // let bindingContext = oItem.getBindingContext('leagueInfo');
            // let path = bindingContext.getPath();
            // let token = path.substr(1);
            // oRouter.navTo('detail', {
            //     leagueItemPath: window.encodeURIComponent(token),
            // });

            oRouter.navTo('detail', {
                leagueItemPath: window.encodeURIComponent(
                    oItem
                        .getBindingContext('leagueInfo')
                        .getPath()
                        .substr(1)
                ),
            });

            //MessageToast.show('Pressed item with ID ' + oEvent.getSource().getId());
            MessageToast.show('Pressed item with ID ' + oItem);
        },
        handleButtonPress: function(oEvent) {
            var oInput = this.getView().byId('input');
            var sString = 'Hello World!';
            oInput.setValue(sString);

            MessageToast.show('Success!');
        },
    });
});
