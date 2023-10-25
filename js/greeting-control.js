import {randomGreeting} from "./greeting-logic.js";

"use strict";

const userName = document.querySelector("#name");
const greetButton = document.querySelector("#sub-button");
const bigMessage = document.querySelector("#greeter");

function greet(e) {
    e.preventDefault();
    bigMessage.innerText = `${randomGreeting()}, ${userName.value}!`;
}

greetButton.addEventListener("click", greet);