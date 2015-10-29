'use strict';

app.calculator = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_calculator
// END_CUSTOM_CODE_calculator
(function(parent) {
    var calculatorModel = kendo.observable({
        fields: {
            sideside: '',
            updown: '',
            group2: '',
            seed: '',
            radio5: '',
            radio4: '',
            radio3: '',
            radio2: '',
            group1: '',
            switch: '',
            edge: '',
            vert: '',
            horiz: '',
            fabric: '',
            quantity: '',
            length: '',
            width: '',
        },
        submit: function() {}
    });

    parent.set('calculatorModel', calculatorModel);
})(app.calculator);

// START_CUSTOM_CODE_calculatorModel
// END_CUSTOM_CODE_calculatorModel