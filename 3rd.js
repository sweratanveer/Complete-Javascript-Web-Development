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

student ["age"] = student["age"] + 1;
console.log(student.age);

student ["name"] = " Rana";

// We can update the let but not the const but we can update the key value of const.

// Practice Questions

const product ={
    title : "Ball Pen",
    rating: 4,
    offer: 5,
    price:270
};
console.log(product);

// Question # 2

const profile = {
    username: "shardakhapra",
    isFollow: true,
    posts: 195,
    followers:569,
    folllowing:4,
};
console.log(profile);
    


