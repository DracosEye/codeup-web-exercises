"use strict"

console.log("Hello from external JavaScript.")

alert("Welcome to my Website!");

let fav_color = prompt("What is your favorite color?");
alert(`Great, ${fav_color} is my favorite color too!`);

//Movie rentals
let mermaid = Number.parseInt(prompt("For how many days would you like to rent The Little Mermaid?"));
let bro_bear = Number.parseInt(prompt("For how many days would youy like to rent Brother Bear?"));
let herc = Number.parseInt(prompt("For how many days would you like to rent Hercules?"));

let total_days = mermaid + bro_bear + herc;
let price = total_days * 3;
alert(`Renting these movies will cost you $${price}.`);

//Contractor Earnings
let fb_hours = Number.parseInt(prompt("How many hours would you like to work for Facebook?"));
let az_hours = Number.parseInt(prompt("How many hours would you like to work for Amazon?"));
let gl_hours = Number.parseInt(prompt("How many hours would you liek to work for Google?"));

let total_earnings = 350 * fb_hours + 380 * az_hours + 400 * gl_hours;
alert(`Hard work pays off! You have earned $${total_earnings}!`);

//Class enrollment
let class_full = confirm("So...this class you want...is it full?");
let conflict = confirm("Does it conflict with your current schedule?");

if (class_full || conflict) {
    alert("Looks like you're out of luck. Try another class.");
} else {
    alert("Looks like it works. Enroll now!");
}

//Product offer
let premium_mbr = confirm("Are you a premium member?");
let num_items = Number.parseInt(prompt("How many items are you buying?"));
let expired = confirm("Has the offer expired?");

if ((premium_mbr || num_items >= 2) && !expired) {
    alert("Good for you! You can use the product offer!");
} else {
    alert("Tough break...looks like you can't use the product offer.");
}
