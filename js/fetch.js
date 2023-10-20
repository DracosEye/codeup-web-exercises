"use strict";

const ghOptions = {
    method: "GET",
    headers: {
        "Authorization": "token " + GITHUB_API_KEY
    }
}


function getLastCommitDate(username) {

    let myPromise = fetch("https://api.github.com/users/" + username + "/events/public", ghOptions)
        .then(response => response.json())
        .then(function(data) {
            for (let event of data) {
                if (event.type === "PushEvent") {
                    return event.created_at;
                }
            }
        });
    return myPromise;
}