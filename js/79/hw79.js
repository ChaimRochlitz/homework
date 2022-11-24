
/* global $ */

(function () {
    'use strict';

    const input = $('input');
    const header = $('h1');
    const img = $('img');
    const ingredients = $('li');

    // not working

    input.change(async () => {
        const res = await fetch(`${input.val()}.json`);
        const text = await res.text();
        header.html(text.name);
        img.src = text.url;
        for (let i = 0; i < ingredients < length; i++) {
            ingredients[i] = text.ingredients[i];
        }


    });



})();