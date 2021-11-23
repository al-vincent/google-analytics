"use strict";

let redButton = document.getElementById("id-btn-red");

redButton.addEventListener("click", function(){
    // simple debug message
    console.log("red button clicked");

    // send the Google analytics event message (maybe...)
    gtag("event", "red_button_clicked", {
        "event_category": "engagement",
        "event_label": "content_type"
    });
});