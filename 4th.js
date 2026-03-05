// Comments in Js 
// This is single line Comment
// <!-- This is a multi-line 
// comment. -->
//console.log("Hello World");

//  Operators in JS
// used to perform some operations on data
//Arithmetic Operators      
let a = 5;
let b = 2;

console.log("a=", a, "& b = ", b);
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("aٌ*b = ", a * b);
console.log("a/b = ", a / b);
console.log("a%b = ", a % b);
console.log("a**b = ", a ** b);

// Unary Operators
let c = 5;
let d = 2;

console.log("c=", c, "& d = ", d);
a = a + 1;
console.log("c=", c);
a--;
console.log("c=", c);
console.log("++c=", ++c);
console.log("--c=", --c);


// Assignment Operators

let e = 5;
let f = 2;

e += 4; // e = e + 4
console.log("e=", e)
e -= 4; //e = e - 4
console.log("e=", e)
e *= 4; // e = e * 4
console.log("e=", e)
e /= 4; // e = e / 4
console.log("e=", e)
e **= 4; // e = e ** 4
console.log("e=", e)


// Comparison Operators

let g = 5;
let h = 2;

console.log("g==h", g == h);  // false
console.log("g!=h", g != h);  // true
console.log("g>h", g > h);  // true
console.log("g<h", g < h);  // false
console.log("g>=h", g >= h);  // true
console.log("g<=h", g <= h);  // false
console.log("g===h", g === h);  // not only check value also check data type


// Logical Operators

// And Operators
let i = 6;
let j = 5;
let cond1 = i > j;
let cond2 = i === j;
console.log("cond1 && cond2", cond1 && cond2);

let cond3 = i < j;
let cond4 = i === 6;
console.log("cond3 && cond4", cond3 && cond4);

let cond5 = i < j;
let cond6 = i != 6;
console.log("cond5 && cond6", cond5 && cond6);

let cond7 = i = j;
let cond8 = i != j;
console.log("cond7 && cond8", cond7 && cond8);

//OR Operator
let k = 6;
let l = 5;
let cond9 = k > l;
let cond10 = k === 6;
console.log("cond9 || cond10", cond9 || cond10);

let cond11 = k < l;
let cond12 = k === l;
console.log("cond11 || cond12", cond11 || cond12);

let cond13 = k < l;
let cond14 = k != 6;
console.log("cond13 || cond14", cond13 || cond14);


let cond15 = (k === l); // true
let cond16 = (k < 6);   // true

console.log("cond15 || cond16", cond15 || cond16); // true


// Not Operator
let m = 6;
let n = 5;
console.log("!(m<n)", !(m < n))


// Conditional Statements
// To implement some condition in the code

// if statement
let age = 25;
if (age >= 18) {
    console.log("you can vote");
}

if (age < 18) {
    console.log("you cannot vote");
}

let mode = "dark";
let color;
if (mode == "dark") {
    color = "black"
}
if (mode = "light") {
    color = "white"
}

console.log(color);

// if-else Statement

let mode1 = "dark";

if (mode1 == "dark") {
    color = "black"
}
else {
    color = "white"
}

console.log(color);

let age1 = 18;
if (age1 >= 18) {
    console.log("you can vote");
}
else {
    console.log("you cannot vote");
}

let number = 4;
if (number % 2 === 0) {
    console.log("Even");
}
else {
    console.log("odd");
}



//else-if Statement
let age2 = 20;
if (age2 < 18) {
    console.log("junior");
}
else if (age2 > 60) {
    console.log("senior");
}
else {
    console.log("middle")
}



//Ternary Operators: Work on three operands 
// condition ? true : false output
let age3 = 25;
let result = age3 >= 18 ? "adult" : "not Adult";
console.log(result);


// MDN DOC

// Question # 1
// Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or Not.

alert("hello!"); // one time popup
let name2 = prompt("hello!");
console.log(name2)

let num = prompt("Enter a number:");
if (num % 5 === 0) {
    console.log("number is multiple of 5")
}
else {
    console.log("number is not a multiple of 5")
}


// Question # 2
// Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = prompt("Enter your scores?");
// let score = 75;
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
}
else if (score >= 70 && score <= 89) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "C";
}
else if (score >= 50 && score <= 59) {
    grade = "D";
}
else if (score >= 0 && score <= 49) {
    grade = "F";
}
console.log("according to your scores, your grade was:", grade)




















