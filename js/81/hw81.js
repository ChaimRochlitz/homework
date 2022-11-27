/* global $ */

(function () {
    'use strict';

    const main = $('main');
    const searchBox = $('#searchBox');
    const search = $('#search');

    search.click(() => {
        loadUrl(searchBox.value); // need to troubleshoot
        displayImages();
    });

    async function loadUrl(url) {
        try {
            const res = await fetch(`'${url}'`);
            if (!res.ok) {
                throw new Error(`${res.status}${res.statusText}`);
            }
            const pics = await res.json();
            return pics;
        } catch (e) {
            searchBox.innerText = 'File not found';
        }
    }

    async function displayImages() {
        const pics = await loadUrl();
        pics.forEach(pic => {
            main.append(
                `<div class="photos">
                 <h3>${pic.title}</h3>
                 <img src = "${pic.picture}"</div>`
            );
            main.css('display', 'grid');

        });
    }

})();