// ==UserScript==
// @name     google_bandcamp
// @version  0.1
// @include  https://www.google.de/*bandcamp*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js

// ==/UserScript==

window.addEventListener('load', function() {
    var test = document.createElement("textarea");
    test.id = 'bandca';
    test.rows = '11';
    test.cols = '50';
    var TargetLink = $("cite:contains('bandcamp')");
    for (i = 0; i < TargetLink.length; i++) {
        var files = String(TargetLink[i].innerHTML);
        var fields = files.split('/');
        var link = 'https://'+fields[2];
        test.value += link+'\n';
    }
    var div = document.getElementById('rhs_block');
    div.appendChild(test);
}, false);
