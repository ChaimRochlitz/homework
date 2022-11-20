(function () {
    'use strict';

    const boyFirstNames = ['Moshe', 'Chaim', 'Simcha', 'David', 'Boruch'];
    const girlFirstNames = ['Miriam', 'Sara', 'Chana', 'Sury', 'Hannah'];
    const lastNames = ['Rochlitz', 'Peppard', 'Lubowsky', 'Stein', 'Cameo'];
    const boys = [''];
    const girls = [''];
    let idTracker = '';

    function generateId() {
        let id = Math.ceil(Math.random() * 40);
        if (idTracker === id) {
            generateId();
        }
        else {
            idTracker = id;
            return id;
        }
    }
    function searchName() {
        return Math.floor(Math.random() * 5);
    }


    for (let i = 0; i < 20; i++) {
        let boy = {
            id: generateId(),
            first: boyFirstNames[searchName()],
            last: lastNames[searchName()],
            gender: 'male',
            spouse: '',
        };

        boys.push(boy);
    }

    for (let i = 0; i < 20; i++) {
        let girl = {
            id: generateId(),
            first: girlFirstNames[searchName()],
            last: lastNames[searchName()],
            gender: 'female',
            spouse: '',
        };

        girls.push(girl);
    }

    for (let i = 0; i < boys.length; i++) {
        if (boys[i].spouse === '') {
            boys[i].spouse = girls[i].first + '' + girls[i].last;
            girls[i].spouse = boys[i].first + '' + boys[i].last;
        }
    }


    for (let i = 0; i < boys.length; i++) {
        console.log(boys[i]);
    }
    for (let i = 0; i < girls.length; i++) {
        console.log(girls[i]);
    }







})();