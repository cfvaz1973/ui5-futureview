sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/core/routing/History'], function(Controller, History) {
    'use strict';
    return Controller.extend('ui5.futureview.controller.Detail', {
        onInit: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute('detail').attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function(oEvent) {
            this.getView().bindElement({
                path: '/' + window.decodeURIComponent(oEvent.getParameter('arguments').leagueItemPath),
                model: 'leagueInfo',
            });
        },
        onNavBack: function() {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo('overview', {}, true);
            }
        },
    });
});