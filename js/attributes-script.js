"use strict";

function updatePic() {
    let pic = document.querySelector("#profile-pic");
    pic.src = "img/headshot.jpeg";
}

function updateName() {
    let name = document.querySelector("#profile-name");
    name.innerHTML = "Ben Heller";
}

function updateDesc() {
    let desc = document.querySelector("#profile-desc");
    desc.classList.add("altered-font");
}

function updateBackground() {

    let background = document.querySelector("#profile-card");
    background.classList.toggle("green-bg");
}

function updatePage() {
    switch (counter) {
        case 1:
            let pic = document.querySelector("#profile-pic");
            pic.src = "img/headshot.jpeg";
            break;
        case 2:
            let name = document.querySelector("#profile-name");
            name.innerHTML = "Ben Heller";
            break;
        case 3:
            let desc = document.querySelector("#profile-desc");
            desc.classList.add("altered-font");
            break;
        case 4:
            let finalName = document.querySelector("#profile-name");
            finalName.innerHTML = prompt("What is your name?");
    }

    let colors = ["red", "green", "blue", "white"];
    let colorIndex = Math.floor(Math.random() * 4);

    let background = document.querySelector("#profile-card");
    background.style.backgroundColor = colors[colorIndex];

    counter++;
}

let counter = 1;

const changePage = setInterval(updatePage, 2000);

// const changePic = setTimeout(updatePage, 2000);
// const changeName = setTimeout(updatePage, 4000);
// const changeDesc = setTimeout(updatePage, 6000);
// const changeBackground = setInterval(updatePage, 2000);