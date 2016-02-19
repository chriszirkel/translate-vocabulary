chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("received message: content.js");

    $( document ).ready(function() {
        console.log("ready: content.js");

        var rows = $("#gt-pb-tb tbody tr td.pb-src-td");

        var row = rows[Math.floor(Math.random()*rows.length)];

        row.click();

        //$.each( rows, function( index, value ) {
        //    console.log("row: " + index);
        //
        //    value.click();
        //
        //
        //});
    });
});

