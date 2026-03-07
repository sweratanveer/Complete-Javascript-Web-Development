// Functions and Methods
// Function is a block of code that performs a specific task. It is a reusable piece of code that can be called multiple times in a program. A method is a function that is associated with an object. It is a property of an object that is a function.

// Function Definition
// A function definition is a way to define a function in JavaScript. It consists of the function keyword, followed by the name of the function, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

// Function Calll
// A function call is a way to execute a function in JavaScript. It consists of the name of the function followed by a list of arguments enclosed in parentheses.

// Example of a function definition and function call
function myFunction(){
    console.log("Welcome to JavaScript!");
    console.log("We are learning about functions and methods.");
}
myFunction(); // Output: Welcome to JavaScript! We are learning about functions and methods.
myFunction(); // Output: Welcome to JavaScript! We are learning about functions and methods.
myFunction(); // Output: Welcome to JavaScript! We are learning about functions and methods.

// Sum Function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
console.log(add(20, 30)); // Output: 50
console.log(add(1, 2)); // Output: 3

function sum(x,y) {
    s = x + y;
    console.log("Before return statement"); // This line will be executed
    return s;
    console.log("After return statement"); // This line will not be executed
}
console.log(sum(5, 10)); // Output: 15
console.log(sum(20, 30)); // Output: 50
console.log(sum(1, 2)); // Output: 3

// Multiplication Function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10)); // Output: 50
console.log(multiply(20, 30)); // Output: 600

// Subtraction Function
function subtract(a, b) {
    return a - b;
}  
console.log(subtract(5, 10)); // Output: -5
console.log(subtract(20, 30)); // Output: -10

// Arrow Function
// An arrow function is a shorter syntax for writing function expressions in JavaScript. It consists of a list of parameters enclosed in parentheses, followed by the arrow (=>) and a block of code enclosed in curly braces.
const greet3 = () => {
    console.log("Hello, World!");
}
greet3(); // Output: Hello, World!

// Example of sum with arrow function
const sum2 = (x, y) => {
    return x + y;
}   
console.log(sum2(5, 10)); // Output: 15
console.log(sum2(20, 30)); // Output: 50


// Let's Practice
// Write a function that takes two numbers as arguments and returns their product.
function product(a, b) {
    return a * b;
}
console.log(product(5, 10)); // Output: 50
console.log(product(20, 30)); // Output: 600

// Write a function that takes a string as an argument and returns the number of characters in the string.
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("Hello, World!")); // Output: 13
console.log(countCharacters("JavaScript is fun!")); // Output: 22

// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60

// Write a function that takes an array of strings as an argument and returns a new array with all the strings in uppercase.
function toUpperCaseArray(arr) {
    let upperCaseArr = [];
    for (let i = 0; i < arr.length; i++) {
        upperCaseArr.push(arr[i].toUpperCase());
    }
    return upperCaseArr;
}
console.log(toUpperCaseArray(["hello", "world"])); // Output: ["HELLO", "WORLD"]
console.log(toUpperCaseArray(["javascript", "is", "fun"])); // Output: ["JAVASCRIPT", "IS", "FUN"]

// Write a function that takes an array of numbers as an argument and returns a new array with all the numbers squared.
function squareArray(arr) {
    let squaredArr = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
}
console.log(squareArray([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]
console.log(squareArray([10, 20, 30])); // Output: [100, 400, 900]

// forEach loop in Arrays 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

//forEach Methods in Functions
// CallBack function
function greet4(name) {
    console.log("Hello, " + name + "!");
}
function processUserInput(callback) {
    const name = "John";
    callback(name);
}
processUserInput(greet4); // Output: Hello, John!

// Another example of CallBack function
function greet5(name) {
    console.log("Hello, " + name + "!");
}
function processUserInput2(callback) {
    const name = "Jane";
    callback(name);
}
processUserInput2(greet5); // Output: Hello, Jane!

// Practice Question of CallBack function
// Write a function that takes a callback function as an argument and calls the callback function with a message.
function displayMessage(callback) {
    const message = "This is a callback function!";
    callback(message);
}   
function showMessage(msg) {
    console.log(msg);
}
displayMessage(showMessage); // Output: This is a callback function!

// Some more array methods
// Map Method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map(function(number) {
    return number * number;
}   
);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Filter Method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// Reduce Method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers4 = [1, 2, 3, 4, 5];
const sumOfNumbers = numbers4.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
} 
);
console.log(sumOfNumbers); // Output: 15

// Some more practice questions
// Write a function that takes an array of numbers as an argument and returns a new array with all the numbers multiplied by 2.
function multiplyByTwo(arr) {
    let multipliedArr = [];
    for (let i = 0; i < arr.length; i++) {
        multipliedArr.push(arr[i] * 2);
    }
    return multipliedArr;
}
console.log(multiplyByTwo([1, 2, 3, 4, 5])); // Output: [2, 4, 6, 8, 10]
console.log(multiplyByTwo([10, 20, 30])); // Output: [20, 40, 60]

// Write a function that takes an array of strings as an argument and returns a new array with all the strings reversed.
function reverseStrings(arr) {
    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.push(arr[i].split("").reverse().join(""));
    }
    return reversedArr;
}
console.log(reverseStrings(["hello", "world"])); // Output: ["olleh", "dlrow"]
console.log(reverseStrings(["javascript", "is", "fun"])); // Output: ["tpircsavaj", "si", "nuf"]





