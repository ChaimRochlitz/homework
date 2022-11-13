window.app = window.app || {};

window.app.counterCreator = (function (module) {
    'use strict';

    let countersCreated = 0;



    module.create = function counterCreator() {
        countersCreated++;

        let count = 0;
        function getCount() {
            return count;
        }
        function increment() {
            return count++;
        }

        return {
            count: count,
            getCount: getCount,
            increment: increment
        };
    };

    return module;

})(window.app.counterCreator = window.app.counterCreator || {});