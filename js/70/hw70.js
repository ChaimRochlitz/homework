(function () {
    'use strict';

    const button = document.getElementById('button');
    let buttonNum = 1;

    const buttonCreator = () => {
        const newButton = document.createElement('button');
        newButton.addEventListener('click', buttonCreator);
        newButton.innerText = `${++buttonNum}`;
        document.body.appendChild(newButton);
    };

    button.addEventListener('click', buttonCreator);


})();