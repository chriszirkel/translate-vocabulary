chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("received message: content.js");

    $( document ).ready(function() {
        console.log("ready: content.js");

        //var $el = $(".jfk-button.jfk-button-standard.jfk-button-narrow.pb-sw");
        //var offset = $el.offset();
        //var event = jQuery.Event( "mousedown", {
        //    which: 1,
        //    pageX: offset.left,
        //    pageY: offset.top
        //});
        //$el.trigger(event);

        // hide tools
        $("#gt-res-tools-l").hide();
        $("#gt-res-tools-r").hide();

        // get all entries form the vocabulary
        var rows = $("#gt-pb-tb tbody tr td.pb-src-td");

        $.get(chrome.extension.getURL('src/overlay.html'), function(data) {
            $("body").append($.parseHTML(data));
        });

        $.get(chrome.extension.getURL('src/input.html'), function(data) {
            $("#result_box").append($.parseHTML(data));
        });

        //$("#overlay-vocabulary-next").click(function() {
        //    var row = rows[Math.floor(Math.random()*rows.length)];
        //    row.click();
        //});

        //$.each( rows, function( index, value ) {
        //    console.log("row: " + index);
        //
        //    value.click();
        //
        //
        //});
    });
});

