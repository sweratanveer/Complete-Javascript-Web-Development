 console.log("Hello World!");
//  Operators in JS
// used to perform some operations on data
//Arithmetic Operators      
// let a =5;
// let b=2;

// console.log("a=" , a, "& b = " , b);
// console.log("a+b = ", a+b);
// console.log("a-b = ", a-b);
// console.log("aٌ*b = ", a*b);
// console.log("a/b = ", a/b);  
// console.log("a%b = ", a%b);  
// console.log("a**b = ", a**b);  

// Unary Operators
// let a =5;
// let b=2;

// console.log("a=" , a, "& b = " , b);
// a = a+1;
// console.log ("a=", a);
// a--;
// console.log ("a=", a);
// console.log ("++a=", ++a);
// console.log ("--a=", --a);


// Assignment Operators

// let a =5;
// let b=2;

// a+=4 ; // a = a + 4
// console.log("a=" , a)
// a-=4 ; // a = a - 4
// console.log("a=" , a)
// a*=4 ; // a = a * 4
// console.log("a=" , a)
// a/=4 ; // a = a / 4
// console.log("a=" , a)
// a**= 4 ; // a = a ** 4
// console.log("a=" , a)


// Comparison Operators

// let a =5;
// let b=2;

// console.log("a==b" , a==b);  // false
// console.log("a!=b" , a!=b);  // true
// console.log("a>b" , a>b);  // true
// console.log("a<b" , a<b);  // false
// console.log("a>=b" , a>=b);  // true
// console.log("a<=b" , a<=b);  // false
// console.log("a===b" , a===b);  // not only check value also check data type


// Logical Operators

// And Operators
// let a =6;
// let b = 5;
// let cond1 = a > b; 
// let cond2 = a===6;
// console.log("cond1 && cond2", cond1 && cond2);

// let cond3 = a < b; 
// let cond4 = a===6;
// console.log("cond3 && cond4", cond3 && cond4);

// let cond5 = a < b; 
// let cond6 = a!= 6;
// console.log("cond5 && cond6", cond5 && cond6);

// let cond7 = a = b; 
// let cond8 = a!= 6;
// console.log("cond7 && cond8", cond7 && cond8);

//OR Operator
// let a =6;
// let b = 5;
// let cond1 = a > b; 
// let cond2 = a===6;
// console.log("cond1 || cond2", cond1 || cond2);

// let cond3 = a < b; 
// let cond4 = a===6;
// console.log("cond3 || cond4", cond3 || cond4);

// let cond5 = a < b; 
// let cond6 = a!= 6;
// console.log("cond5 || cond6", cond5 || cond6);


// let cond7 = (a === b); // true
// let cond8 = (a < 6);   // true

// console.log("cond7 || cond8", cond7 || cond8); // true


// Not Operator
// let a =6;
// let b = 5;
// console.log("!(a<b)" , !(a<b))


// Conditional Statements
// To implement some condition in the code

// if statement
// let age=25;
// if(age>=18) 
// {
//     console.log("you can vote");
// }

// if(age<18) 
// {
//     console.log("you cannot vote");
// }

// let mode="dark";
// let color;
// if(mode=="dark"){
//     color="black"
// }
// if(mode="white"){
//     color="white"
// }

// console.log(color);

// if-else Statement

// let mode="dark";

// if(mode=="dark"){
//     color="black"
// }
// else{
//     color="white"
// }

// console.log(color);

// let age=18;
// if(age>=18) 
// {
//     console.log("you can vote");
// }
// else
// {
//     console.log("you cannot vote");
// }

// let number=4;
// if(number%2=== 0) 
// {
//     console.log("Even");
// }
// else
// {
//     console.log("odd");
// }



//else-if Statement
// let age=20;
// if(age < 18) 
// {
//     console.log("junior");
// }
// else if (age>60)
// {
//     console.log("senior");
// }
// else
// {
//     console.log("middle")
// }



//Ternary Operators: Work on three operands 
// let age = 25;
// let result = age>=18 ? "adult" : "not Adult";
// console.log(result);


// MDN DOC

// Question # 1
// Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or Not.

// alert("hello!"); // one time popup
// let name = prompt("hello!"); 
// console.log(name)

// let num = prompt("Enter a number:");
// if(num%5===0)
// {
//     console.log("number is multiple of 5")
// }
// else{
//     console.log("number is not a multiple of 5")
// }


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
if (score>=90 && score <=100) {
   grade = "A";
}
else if(score>=70 && score <=89)
{
    grade = "B";
}
else if(score>=60 && score <=69)
{
    grade = "C";
}
else if(score>=50 && score <=59)
{
    grade = "D";
}
else if (score>=0 && score<=49){
    grade = "F";
}
console.log("according to your scores, your grade was:" , grade)



















