//javascript för startsidan
"use strict";

//eventlyssnare för knapp på startsida, så när man klickar kommer man till meny sidan
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('meny-button');
    if(menuButton) {
        menuButton.addEventListener('click', () => {
        window.location.href = 'meny.html';
    });
    }
});

