window.myApp = window.myApp || {};

window.myApp.utils = (function (module) {
    "use strict";

    module.caseInsensitiveEquals = function (a, b) {
        return a.toLowerCase() === b.toLowerCase();
    };

    return module;
})(window.myApp.utils || {});