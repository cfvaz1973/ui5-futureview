sap.ui.define(
    ['sap/ui/core/UIComponent', 'sap/ui/Device', 'ui5/futureview/model/models', 'sap/ui/model/json/JSONModel'],
    function(UIComponent, Device, models, JSONModel) {
        'use strict';

        return UIComponent.extend('ui5.futureview.Component', {
            metadata: {
                manifest: 'json',
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function() {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), 'device');

                // set the FLP model
                this.setModel(models.createFLPModel(), 'FLP');

                // set the Message model
                this.setModel(
                    sap.ui
                        .getCore()
                        .getMessageManager()
                        .getMessageModel(),
                    'message'
                );

                // Developments start here
                // var oModel = new JSONModel('model/leagues.json');
                // this.setModel(oModel);

                // OPTION1: access league model (through leagues.json file)
                // to get the model in this way it's required to have the proper definitions on manifest.json file
                // var oLeagues = this.getModel('leagueInfo'); // access league model
                // this.setModel(oLeagues, 'leagues');
                // oLeagues.dataLoaded().then(function() {
                //     console.log("'leagues.json' file read");
                //     let aLeagues = oLeagues.getProperty('/response');
                //     console.log(JSON.stringify(oLeagues.getData()));
                // });

                // OPTION2: access league model directly through the file
                // var oLeagues = new sap.ui.model.json.JSONModel();
                // oLeagues.loadData('model/leagues.json');
                // oLeagues.dataLoaded().then(function() {
                //     // data is loaded
                //     console.log("'leagues.json' file read");
                //     // get response content
                //     let response = oLeagues.getData();
                //     // get response in JSON format
                //     let responseJSON = JSON.stringify(oLeagues.getData());
                //     // access leagues
                //     let aLeagues = oLeagues.getProperty('/response');
                //     // Get first and second leagues from array
                //     const [first, second, ...others] = aLeagues;
                //     // Get last league from array
                //     const [last] = [...aLeagues].reverse();
                //     // destructuring first league
                //     let leagueInfo = first.league;
                //     const {id, name, type, logo} = leagueInfo;
                //     // Get first league from property
                //     let league1 = oLeagues.getProperty('/response/0');
                //     // find the portuguese league
                //     let portugueseLeague = aLeagues.find(element => element.country.name === 'Portugal');
                // });

                // access API Random User
                // fetch('https://api.randomuser.me/?nat=US&results=1')
                //     .then(res => res.json())
                //     .then(json => json.results)
                //     .then(console.log)
                //     .catch(console.error);

                // const getPeople = count =>
                //     new Promise((resolves, rejects) => {
                //         const api = `https://api.randomuser.me/?nat=US&results=${count}`;
                //         const request = new XMLHttpRequest();
                //         request.open('GET', api);
                //         request.onload = () =>
                //             request.status === 200
                //                 ? resolves(JSON.parse(request.response).results)
                //                 : reject(Error(request.statusText));
                //         request.onerror = err => rejects(err);
                //         request.send();
                //     });

                // getPeople(10)
                //     .then(members => console.log(members))
                //     .catch(error => console.error(`getPeople failed: ${error.message}`));
            },

            /**
             * The component is destroyed by UI5 automatically.
             * @public
             * @override
             */
            destroy: function() {
                // call the base component's destroy function
                UIComponent.prototype.destroy.apply(this, arguments);
            },

            /**
             * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
             * design mode class should be set, which influences the size appearance of some controls.
             * @public
             * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
             */
            getContentDensityClass: function() {
                if (this._sContentDensityClass === undefined) {
                    // check whether FLP has already set the content density class; do nothing in this case
                    if (
                        jQuery(document.body).hasClass('sapUiSizeCozy') ||
                        jQuery(document.body).hasClass('sapUiSizeCompact')
                    ) {
                        this._sContentDensityClass = '';
                    } else if (!Device.support.touch) {
                        // apply "compact" mode if touch is not supported
                        this._sContentDensityClass = 'sapUiSizeCompact';
                    } else {
                        // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                        this._sContentDensityClass = 'sapUiSizeCozy';
                    }
                }
                return this._sContentDensityClass;
            },
        });
    }
);
