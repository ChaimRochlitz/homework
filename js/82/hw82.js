/* global google */

(function () {
    'use strict';

    //ran out of time - will circle back to finish
 
    const search = document.querySelector('#searchBar');
    let location = { lat: 40.09584720509516, lng: -74.22222707431865 };
    let location2 = {
        lat: `http://api.geonames.org/wikipediaSearch?q=${search.val.lng}&maxRows=10&username=slubowsky&type=json, lng: -74.22222707431865` };


        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: bmgLoc,
            mapTypeId: google.maps.MapTypeId.HYBRID
        });


    })();