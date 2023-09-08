// function declaration

// start with `function` keyword
// follow with name of the function
// think of what information you need in order to make this program work: these are the parameters
// you name the parameters and put them in a comma separated list inside the parentheses
// open up a pair of curly braces
// inside the curly braces, you put the code that will actually run
// this is called the code block
// finally, you create a return statement

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }


// function timeIWouldSave(currentSpeed, plannedSpeed, distanceToTravel) {
//     const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
// }

// let result = addTwoNumbers(2, 2);

// ARROW FUNCTION

// Doesn't use the `function` keyword
// Define a variable with a variable name
// that variable name is how you call the function
// you put the parameters inside parentheses
// then you have an 'arrow' (angle bracket and equals sign)
// then you have the return value

// If I am just returning something in on line
// I don't need the return keyword

// If I have multiple lines of logic inside my arrow function, I need curly braces
// If I have curly braces, I hve to have a `return` keyword to define the return value

const addTwoNumbers = (num1, num2) => num1 + num2;

const timeIWouldSave = (currentSpeed, plannedSpeed, distanceToTravel)  => {
    const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
    const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
    return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
}

// FUNCTION EXPRESSIONS

// These have basically been replaced by arrow functions
// The value of this is that you have a variable name that is a reference to a function
// That is useful if you ever need to pass a function to another function, or return a function from a function.

const add = function(num1, num2) {
    return num1 + num2;
}

// let result = add(5, 5);
// console.log(result);

// console.log(add(5, 5));

console.log(add(5, 5));