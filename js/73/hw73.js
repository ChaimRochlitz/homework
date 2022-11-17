onload = (function () {
    'use strict';

    const msgBox = document.body.querySelector('#msgBox');
    const xMsgBox = document.body.querySelector('#xMsgBox');
    const input = document.body.querySelector('#input');
    const xInput = document.body.querySelector('#xInput');
    const inputMsg = document.body.querySelector('#inputMsg');


    function closeInput() {
        if (input.innerText !== "") {
            inputMsg.value = input.innerText;
        }
        input.style.innerText = "";
        input.style.display = 'none';
        xInput.style.display = 'none';
        msgBox.style.display = 'block';
        inputMsg.style.display = 'block';
    }
    function closeMsgBox() {
        msgBox.style.display = 'none';
        input.style.display = 'block';
        xInput.style.display = 'block';
    }


    xInput.addEventListener('click', closeInput);
    xMsgBox.addEventListener('click', closeMsgBox);

})();


//Couldn't make it fully work