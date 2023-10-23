"use strict";

const ghOptions = {
    method: "GET",
    headers: {
        "Authorization": "token " + GITHUB_API_KEY
    }
}


function getLastCommitDate(username) {

    return fetch("https://api.github.com/users/" + username + "/events/public", ghOptions)
        .then(response => response.json())
        .then(function(data) {
            for (let event of data) {
                if (event.type === "PushEvent") {
                    return event.created_at;
                }
            }
        });
}

console.log(getLastCommitDate("DracosEye"));

// Asynchronous function -- will execute one line after the other, each waits for the previous line before executing
// Must mark function async if you use await (they just go together)
async function getUsersLastCommitDate(username) {
    console.log("1");
    const response = await fetch("https://api.github.com/users/" + username + "/events/public", ghOptions);
    console.log("2");
    const data = await response.json()
    console.log("3");
    console.log(data);
    console.log("4");
}