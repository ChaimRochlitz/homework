window.app = window.app || {};

window.app.counter = (function (module) {
    'use strict';

    let count = 0;

    module.getCount = () => count;
    module.increment = () => count++;
    return module;

})(window.app.counter || {});

