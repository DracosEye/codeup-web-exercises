"use strict";

let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {
    let lists = document.querySelectorAll(".fun-facts");
    for (let list of lists) {
        list.lastElementChild.style.backgroundColor = "yellow";
    }
});

let headers = document.querySelectorAll("h3");
for (let header of headers) {
    header.addEventListener("click", function() {
        this.nextElementSibling.style.fontWeight = "bold";
    });
}

let list_items = document.querySelectorAll("li");
for (let item of list_items) {
    // console.log("item");
    item.addEventListener("click", function() {
        // console.log("clicked");
        this.parentElement.firstElementChild.style.color = "blue";
    });
}

<!--BONUS-->
document.querySelector("#btn-left").addEventListener("click", function() {
   let left_img = this.parentElement.firstElementChild;
   let center_img = this.parentElement.nextElementSibling.firstElementChild;
   let temp = left_img.src;
   left_img.setAttribute("src", center_img.src);
   center_img.setAttribute("src", temp);
});

document.querySelector("#btn-center").addEventListener("click", function() {
    let center_img = this.parentElement.firstElementChild;

    let num = Math.random();
    let new_img;
    if (num < 0.5) {
        new_img = this.parentElement.parentElement.firstElementChild.firstElementChild;
    }
    else {
        new_img = this.parentElement.nextElementSibling.firstElementChild;
    }

    let temp = center_img.src;
    center_img.setAttribute("src", new_img.src);
    new_img.setAttribute("src", temp);
});

document.querySelector("#btn-right").addEventListener("click", function() {
    let right_img = this.parentElement.firstElementChild;
    let center_img = this.parentElement.parentElement.children[1].firstElementChild;

    let temp = right_img.src;
    right_img.setAttribute("src", center_img.src);
    center_img.setAttribute("src", temp);
});