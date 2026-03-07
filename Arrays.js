// Arrays is collection of items in javascript.
// 1. Array can store multiple values in a single variable.
//Example: let marks = [98, 97, 99, 96, 95];
// 2. Array can store different types of data.
//Example: let mixedArray = [1, "Hello", true, null, undefined, {name: "John"}, [1, 2, 3], function() { console.log("Hello"); }];
// 3. Array is an object in javascript.
// 4. Array is a reference type in javascript.
// 5. Array is a dynamic data structure in javascript.
// 6. Array is a zero indexed data structure in javascript.
// 7. Array is a mutable data structure in javascript.
// 8. Array is a built-in object in javascript.
// 9. Array is a global object in javascript.
// 10. Array is a constructor function in javascript.
// 11. Array is a prototype object in javascript.
// 12. Array is a iterable object in javascript.
// 13. Array is a collection of elements in javascript.
// 14. Array is a list of items in javascript.
// 15. Array is a collection of values in javascript.
// 16. Array is a collection of objects in javascript.
// 17. Array is a collection of functions in javascript.
// 18. Array is a collection of arrays in javascript.
// 19. Array is a collection of any type of data in javascript.
// 20. Array is a collection of any type of objects in javascript.
// 21. Array is a collection of any type of functions in javascript.
// 22. Array is a collection of any type of arrays in javascript.

// Create Array
let marks = {
    student1 :98,
    student2: 97,
    student3: 99,
    student4: 96,
    student5: 95,
}

let fruits = ["Apple","Banana", "Orange", "Mango", "Grapes"];
document.writeln(fruits  + "<br>");
console.log(fruits);


console.log(fruits.length); 
document.writeln(fruits.length  + "<br>");

// Array indices
// Array indices start from 0. So, the first element of the array is at index 0, the second element is at index 1, and so on.
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange
console.log(fruits[3]); // Mango
console.log(fruits[4]); // Grapes

document.writeln(fruits[0]  + "<br>");
document.writeln(fruits[1]  + "<br>");
document.writeln(fruits[2]  + "<br>");
document.writeln(fruits[3]  + "<br>");
document.writeln(fruits[4]  + "<br>");

// Looping over an array
// it is used to access each element of the array one by one.
// print all the elements of an array using for loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
    document.writeln(fruits[i]  + "<br>");
}
let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
for (let city of cities) {
    console.log(city);
    document.writeln(city  + "<br>");
}
 

// Let's Practice
// Q.No.1 For a given array with marlks of students [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
let Marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of Marks){
    sum += val;
}
let average = sum / Marks.length;
console.log("Average Marks: " + average);
document.writeln("Average Marks: " + average  + "<br>");    

// Q.No.2 For a given array with names of students ["Alice", "Bob", "Charlie", "David", "Eve"] Print the names of all the students in uppercase.
let students = ["Alice", "Bob", "Charlie", "David", "Eve"]; 
for(let student of students){
    console.log(student.toUpperCase());
    document.writeln(student.toUpperCase()  + "<br>");
}

// Q.No.3 For a given array with numbers [1, 2, 3, 4, 5] Print the square of each number in the array.
let numbers = [1, 2, 3, 4, 5];
for(let number of numbers){
    console.log(number * number);
    document.writeln(number * number  + "<br>");
}

// Q.No.4 For a given array with prices of 5 items [250, 645, 300, 90,50]  All items have an offer of 10% OFF on them. Change the array to store final prices after applying offer.
let prices = [250, 645, 300, 90, 50];
for(let i=0; i<prices.length; i++){
    prices[i] = prices[i] - (prices[i] * 10 / 100);
}
console.log(prices);
document.writeln(prices  + "<br>"); 

// Q.No.5 For a given array with names of 5 cities ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"] Print the names of all the cities that start with the letter 'B'.
let cities1 = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
for(let city of cities1){
    if(city.startsWith("B")){
        console.log(city);
        document.writeln(city  + "<br>");
    }   
}


// Array Methods
// Push method is used to add an element at the end of the array.
let numbers1 = [1, 2, 3, 4, 5];
numbers1.push(6,7,8,9,10);
console.log(numbers1);
document.writeln(numbers1  + "<br>");   

// Pop method is used to remove the last element of the array.
let numbers2 = [1, 2, 3, 4, 5];
numbers2.pop();
console.log(numbers2);
document.writeln(numbers2  + "<br>");

// toString method is used to convert an array to a string.
let numbers5 = ["1, 2, 3, 4, 5"];
let numbersString = numbers5.toString();    
console.log(numbersString);
document.writeln(numbersString  + "<br>");

// concat method is used to merge two or more arrays.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray);
document.writeln(mergedArray  + "<br>");


// Unshift method is used to add an element at the beginning of the array.
let numbers3 = [1, 2, 3, 4, 5];
numbers3.unshift(0);
console.log(numbers3);
document.writeln(numbers3  + "<br>");

// Shift method is used to remove the first element of the array.
let numbers4 = [1, 2, 3, 4, 5];
numbers4.shift();
console.log(numbers4);
document.writeln(numbers4  + "<br>");

// Slice method is used to extract a portion of an array and return a new array.
let numbers6 = [1, 2, 3, 4, 5];
let slicedArray = numbers6.slice(1, 4);
console.log(slicedArray);
document.writeln(slicedArray  + "<br>");

// Splice method is used to add or remove elements from an array.
let numbers7 = [1, 2, 3, 4, 5];
let splicedArray = numbers7.splice(2, 1, 6, 7);
console.log(numbers7);
document.writeln(numbers7  + "<br>");

// Practice Questions
// Q.No.1 For a given array with names of 5 fruits ["Apple", "Banana", "Orange", "Mango", "Grapes"] Add a new fruit "Pineapple" at the end of the array.
let fruits1 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
fruits1.push("Pineapple");
console.log(fruits1);
document.writeln(fruits1  + "<br>");    

// Q.No.2 For a given array with names of 5 colors ["Red", "Green", "Blue", "Yellow", "Purple"] Remove the last color from the array.
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
colors.pop();
console.log(colors);
document.writeln(colors  + "<br>");     

// Q.No.3 For a given array with names of 5 animals ["Dog", "Cat", "Elephant", "Lion", "Tiger"] Convert the array to a string and print it.
let animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger"];
let animalsString = animals.toString();
console.log(animalsString);
document.writeln(animalsString  + "<br>");

// Q.No.4 For a given array with numbers [1, 2, 3] Merge it with another array [4, 5, 6] and print the merged array.
let array3 = [1, 2, 3];
let array4 = [4, 5, 6];
let mergedArray1 = array3.concat(array4);
console.log(mergedArray1);
document.writeln(mergedArray1  + "<br>");

// Q.No.5 For a given array with names of 5 countries ["India", "USA", "UK", "Australia", "Canada"] Add a new country "Germany" at the beginning of the array.
let countries = ["India", "USA", "UK", "Australia", "Canada"];
countries.unshift("Germany");
console.log(countries);
document.writeln(countries  + "<br>");

// Q.No.6 For a given array with names of 5 sports ["Football", "Basketball", "Tennis", "Cricket", "Hockey"] Remove the first sport from the array.
let sports = ["Football", "Basketball", "Tennis", "Cricket", "Hockey"];
sports.shift();
console.log(sports);
document.writeln(sports  + "<br>");

// Q.No.7 For a given array with numbers [1, 2, 3, 4, 5] Extract a portion of the array from index 1 to index 3 and print the new array.
let numbers8 = [1, 2, 3, 4, 5];
let slicedArray1 = numbers8.slice(1, 4);
console.log(slicedArray1);
document.writeln(slicedArray1  + "<br>");

// Q.No.8 For a given array with names of 5 cities ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"] Add a new city "Hyderabad" at index 2 and remove the city at index 4.
let cities2 = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
cities2.splice(2, 1, "Hyderabad");
console.log(cities2);
document.writeln(cities2  + "<br>");









