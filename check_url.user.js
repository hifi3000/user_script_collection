// ==UserScript==
// @name         check_url
// @namespace    none
// @version      0.1
// @match        https://open.spotify.com/track/*
// ==/UserScript==

window.addEventListener('load', function() {
    var TargetLink1 = document.title;
    alert(TargetLink1);
});
