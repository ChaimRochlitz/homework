(function () {
    'use strict';

    function setRgb(r, g, b) {
        document.body.style.backgroundColor = (`rgb(${r},${g},${b})`);
    }

    let r;
    let g;
    let b;

    for (let i = 0; i < 255; i++) {
        setInterval(setRgb(r, g, b), 1000);
    }

    r++;
    g++;
    b++;

    //Could not make this work

})();