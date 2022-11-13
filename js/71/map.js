(function () {
    'use strict';

    function customMap(array, callback) {

        const newArray = [];

        array.forEach(element => {
            newArray.push(callback(element));
        });
        return newArray;
    }

    //test run

    const array = [2, 4, 6];

    function doubler(x) {
        return x * 2;
    }

    const array2 = customMap(array, doubler);
    console.log(array);
    console.log(array2);
})();

