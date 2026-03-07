// Loops in Js
// Loops are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops in JavaScript, including:
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 1. For Loop
// The for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
for(let count = 1; count<=5; count++) {
    console.log("Javascript is fun!");
}
// Calculate sum of 1 to 5 
let sum = 0;
for(let i = 1; i <= 5; i++) {
    sum += i; // sum = sum + i
}
console.log("The sum of numbers from 1 to 5 is: " + sum);
console.log("Loop has ended!");

//Print 1 to 5
for (let j = 1; j<=5; j++) {
    console.log("j =" , j);
}

//Infinite Loop
// An infinite loop is a loop that never ends. It can be caused by a condition that always evaluates to true or by forgetting to update the loop variable.

//While Loop
// The while loop is used when the number of iterations is not known beforehand. It continues to execute as long as the specified condition is true.
let k = 1;
while(k <= 5) {
    console.log("k = ", k);
    k++;
}
// Do-While Loop
// The do-while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.
let m = 1;
do {
    console.log("m = ", m);
    m++;
}
while(m <= 5);

//for...of Loop
// The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
let str = "Swera Rana";

let size = 0;
for(let value of str)
    //iterator --> character by character
{
    console.log("Value: ", value);
    size++;
}
console.log("Size of string: ", size);

//for...in Loop
// The for...in loop is used to iterate over the properties of an object.
let person = {
    name: "Swera",
    age: 19,
    city: "Kathmandu"
};
for(let key in person) {
    console.log(key + ": " + person[key]);
}

// Practice Problems

// 1. Print the all even numbers using a for loop.
console.log("Even numbers from 1 to 10:");
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters corrct value.
let gameNum = 25;

let userNum = prompt("Guess the game number : " )

while(userNum != gameNum) {
    userNum = prompt("Wrong guess! Try again: ");
}

//console.log("Congratulations! You guessed the correct number: " );


// 
