/* global $ */

(async function () {
    'use strict';

    const video = $('video');
    const title = $('h3');
    let i = 0;

    const res = await fetch("videos.json");
    const videos = await res.json();
    videos.forEach(vid => {
        title[i].innerText = vid.title;
        video[i].poster = vid.picture;
        i++;
    });

    video.click(event =>{
        console.log('video was clicked');
        event.target.src = videos[event.target.id].url;

    });

})();