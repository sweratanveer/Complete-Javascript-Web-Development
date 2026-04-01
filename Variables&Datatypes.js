
console.log("Swera Rana");
console.log("Sanam Shehzadi");
console.log("Yusra Riaz");
console.log("Muzammil");


// Variables are containers for storing data values. In JavaScript, we can declare variables using var, let, or const keywords.
fname = "Swera Tanveer";
console.log(fname)
fage = 20;
console.log(fage)
price = 99.99;
console.log(price)


x = null;
y = undefined;
console.log(x);



radius = 14;
console.log(radius);

isFollow = true;
console.log(isFollow);

// Variables Rules 
// Variables names are case sensitive means the meaning of "a" and "A" is different
// Only letters, digits, underscore(-) and $ is allowed. (not even space)
// Only a letter underscore(-) and $ should be 1st character.
//Reserved words cananot bhi variables name

fullName = "Swera Rana";
FULLNAME = "RANA";
console.log(fullName);
console.log(FULLNAME);
_FULLNAME = "RANA";
$FULLNAME = "RANA";
__FULLNAME = "RANA";


//let, const & var
//var: Variable can be re-declared& updated. A global scope Variable.
//let: Variable cannot be re-declared but can be updated. A block scope variable.
//const: Variable cannot be re-declared or updated. A block scope variable.


let name = "Swera Tanveer";
console.log(name);

let age = 19;
age = 59;
age = 86;
console.log(age);

let totalprice = 99.99;
console.log(totalprice);

let a;
a = 10;
console.log(a);

// It is known as block. A block is a chunk of code bounded by {}. 
// Variables declared with let and const are only accessible within the block they are declared in. This is called block scope.

{
    let a = 5;
    console.log(a);
}

const pi = 3.14;
console.log(pi);
//pi = 3.1415;  //This will give an error because we cannot update a const variable
//console.log(pi);


//Data Types in JS 
//  Primitive 
//String
//Number
//Boolean
//Undefined
//Null
//BigInt
//Symbol 

// number
let age1 = 24;
console.log(age1);

//String
let name1 = "Ali";
console.log("name1");

//Boolean
isFollow = "true";
console.log(isFollow);

//undefined
let z;
console.log(z);

//null
let u = null;
console.log(u);

// Non Primitive
// Objects  (Arrays, Functions)
//It is a collection of values

const student = {
    fullname: "Swera Rana",
    age: 19,
    cgpa: 3.76,
    isPass: true,
};
console.log(student);
console.log(student.fullname);
console.log(student.age);
console.log(student.cgpa);
console.log(student.isPass);

student["age"] = student["age"] + 1;
console.log(student.age);

student["name"] = " Rana";

// We can update the let but not the const but we can update the key value of const.

// Practice Questions
// Question # 1 Create an object named product with the following properties: title, rating, offer, and price. 
// Assign appropriate values to each property and log the object to the console.
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270
};
console.log(product);

// Question # 2 Create an object named profile with the following properties: username, isFollow, posts, followers, and following.
// Assign appropriate values to each property and log the object to the console.

const profile = {
    username: "shardakhapra",
    isFollow: true,
    posts: 195,
    followers: 569,
    folllowing: 4,
};
console.log(profile);

// Practice Questions for Variables 
// Question # 1 Declare a variable named fullName and assign it your full name as a string. 
// Then, log the value of fullName to the console.
let fullName = "Swera Rana";
console.log(fullName);  


// Question # 2 Declare a variable named age and assign it your age as a number.
// Then, log the value of age to the console.
let age3 = 24;
console.log(age3);

// Question # 3 Declare a variable named price and assign it a decimal value representing the price of an item.
// Then, log the value of price to the console.
let price1 = 99.99;
console.log(price1);

// Question # 4 Declare a variable named isFollow and assign it a boolean value indicating whether you are
//   following someone on social media.
let isFollow1 = true;
console.log(isFollow1);

// Practice Questions for Data Types
// Question # 1 Create an object named student with the following properties: fullName, age, cgpa, and isPass.
// Assign appropriate values to each property and log the object to the console.
const student1 = { 
    fullName: "Swera Rana",
    age: 19,
    cgpa: 3.76, 
    isPass: true,
};  
console.log(student1);

// Question # 2 Create an object named profile with the following properties: username, isFollow, posts, followers, and following.
// Assign appropriate values to each property and log the object to the console.
const profile1 = {
    username: "shardakhapra",
    isFollow: true,
    posts: 195, 
    followers: 569,
    following: 4,
};
console.log(profile1);

// Question # 3 Declare a variable named x and assign it the value null. Then, log the value of x to the console.
let x1 = null;
console.log(x1);    

// Question # 4 Declare a variable named y without assigning it a value. Then, log the value of y to the console.
let y1;
console.log(y1);    



















