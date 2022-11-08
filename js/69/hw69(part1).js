window.myApp = window.myApp || {};

window.myApp.utils = (function (module) {
    'use strict';

    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    module.getDayName = index => dayOfWeek[index - 1];
    module.getDayNumber =
        function getDayNumber(day) {
            const d = day.toLowerCase();
            for (let i = 0; i < dayOfWeek.length; i++) {
                if (dayOfWeek[i].toLowerCase() === d) {
                    return i + 1;
                }
            }
        };
    return module;
}

)(window.myApp.utils || {});
