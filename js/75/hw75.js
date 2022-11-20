window.app = window.app || {};
window.app.pcsTools = (function () {
    'use strict';

    function get(selector) {
        return document.querySelector(selector);
    }

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    function getCss(elem, property) {
        return elem.style[property];
    }

    function addEventListener(elem, type, callback) {
        elem.addEventListener(type, callback);
    }

    function randColor(elem){
        const colors = ['red', 'white', 'blue'];
        let index = Math.floor(Math.random) * 2;
        elem.style.color = colors[index];
        return elem;
    }

    function colorChange(elem, duration){
        setInterval(randColor(elem), duration);
    }

   
    return {
        wrap: function (selector) {
            const elem = get(selector);

            return {
                css: function (property, value) {
                    if (arguments.length === 2) {
                        setCss(elem, property, value);
                        return this;
                    } else {
                        return getCss(elem, property);
                    }
                },
                click: function (callback) {
                    addEventListener(elem, 'click', callback);
                    return this;
                },
                hide: function () {
                    setCss(elem, 'display', 'none');
                    return this;
                },
                show: function (displayValue = 'block') {
                    setCss(elem, 'display', displayValue);
                    return this;
                },
                changeColor: function (duration) {
                    colorChange(elem, duration);
                    return this;
                }
            };
        }
    };
})();
