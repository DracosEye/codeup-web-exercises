"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Get users with at least three languages
let trilinguals = users.filter(user => user.languages.length >= 3);
console.log(trilinguals);

// Get array of email addresses
let addresses = users.map(user => user.email);
console.log(addresses);

// Calculate total and average years of experience
let totalExp = users.reduce(function(totalSoFar, curUser) {
    return totalSoFar + curUser.yearsOfExperience;
}, 0);
let avgExp = totalExp / users.length;
console.log ("Total years of experience = " + totalExp);
console.log ("Average years of experience = " + avgExp);

// Find the longest email address
let longestEmail = users.reduce(function(longestSoFar, curUser) {
    if (curUser.email.length > longestSoFar.length) {
        return curUser.email;
    }
    return longestSoFar;
}, users[0].email);
console.log ("Longest email is " + longestEmail);

// Create a string of all user names
function addNames (longString, curUser) {
    if (users.indexOf(curUser) === users.length - 1) {
        return longString + "and " + curUser.name + ".";
    }
    return longString + curUser.name + ", ";
}
let allNames = users.reduce(addNames, "Your instructors are: ");
console.log(allNames);

// Get set of all languages (Bonus)
let allLanguages = users.map(user => user.languages).flat();
let uniqueLanguages = allLanguages.filter((language, index) => allLanguages.indexOf(language) === index);
console.log(uniqueLanguages);