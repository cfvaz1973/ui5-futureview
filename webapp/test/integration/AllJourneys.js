sap.ui.define(
    [
        'sap/ui/test/Opa5',
        'ui5/futureview/test/integration/pages/Common',
        'ui5/futureview/test/integration/AppJourney',
    ],
    function(Opa5, Common) {
        'use strict';

        Opa5.extendConfig({
            arrangements: new Common(),
            pollingInterval: 100,
            timeout: 15,
            autoWait: true,
        });
    }
);
