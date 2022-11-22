(function () {
    'use strict';

    const enter = $('#enter');
    const input = $('#input');

    enter.on('click', () => {
        if (input.innerText !== '') {
            fetch(input.val())
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error(console.log(`oops, ${res.status} ${res.statusText}`));
                    }
                    else {
                        return res.json();
                    }
                })
                .then(data => {
                    data.forEach(p => {
                        console.log(p);
                        const person = JSON.parse(p);

                        //Couldn't app to HTML
                    });
                });


        }
    });

})();