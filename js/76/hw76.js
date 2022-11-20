(function () {
    'use strict';

    const clock = document.querySelector('#clock');
    const time = document.querySelectorAll('.time');
    const divider = document.querySelectorAll('.divider');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');



    function styleClock() {
        clock.style.position = 'absolute';
        clock.style.top = '50%';
        clock.style.left = '50%';
        clock.style.transform = 'translate(-50%, -50%)';
        clock.style.width = '800px';
        clock.style.height = '300px';
        clock.style.boxShadow = '0 0 20px 20px rgb(174, 219, 219)';
        clock.style.borderRadius = '1em';
        clock.style.backgroundColor = 'aqua';
        clock.style.display = 'flex';
        clock.style.justifyContent = 'space-around';
        clock.style.alignItems = 'center';
    }

    function styleTime() {

        time.forEach(time => {
            time.style.width = '180px';
            time.style.height = '250px';
            time.style.borderRadius = '0.5em';
            time.style.backgroundColor = 'antiquewhite';
            time.style.display = 'flex';
            time.style.color = 'aqua';
        });

    }

    function styleDivider() {

        divider.forEach(divider => {
            divider.style.alignSelf = 'center';
            divider.style.textAlign = 'center';
            divider.style.fontSize = '8em';
            divider.style.color = 'antiquewhite';
        });
    }

    function styleHoursMinutes() {
        hours.style.margin = 'auto';
        hours.style.fontSize = '5em';
        minutes.style.margin = 'auto';
        minutes.style.fontSize = '5em';
        seconds.style.margin = 'auto';
        seconds.style.fontSize = '5em';
        const d = new Date();

        //still need to convert to military time

        hours.innerText = d.getHours();
        minutes.innerText = d.getMinutes();
        seconds.innerText = d.getSeconds();
    }

    styleClock();
    styleDivider();
    styleTime();
    setInterval(styleHoursMinutes, 1000);


})();
