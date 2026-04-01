// Strings in Js
// Strings are a sequence of characters used to represent text. In JavaScript, strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `). They can contain letters, numbers, symbols, and whitespace. Strings are immutable, meaning that once they are created, they cannot be changed. However, you can create new strings based on existing ones using various string methods.
let string = "Apna College";
let string1 = "Hello World:";
console.log(string);
console.log(string1);

console.log(string.length); // Length of the string                                                         
console.log(string[0]); // Accessing characters in a string (index starts at 0)
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[4]);
console.log(string[5]); 
console.log(string[6]);
console.log(string[7]);
console.log(string[8]);
console.log(string[9]);
console.log(string[10]);

// Template Literals (Template Strings)
// Template literals are a way to create strings in JavaScript that allow for easier string interpolation and multi-line strings. 
// They are enclosed in backticks (` `) instead of single or double quotes. Template literals can contain placeholders, 
// which are denoted by ${expression}. The expression inside the placeholder is evaluated and its result is included in the string.
let specialString = "This is a template literal.";
console.log(specialString);


let obj = {
    item: "pen",
    price :10,
};

// String Interpolation using Template Literals
// To create a string that includes the values of the properties from the obj object, we can use template literals for string interpolation.
//  This allows us to embed expressions directly within the string, making it easier to read and maintain.             
let output = `The price of the ${obj.item} is ${obj.price} rupees.` // Using template literals for string interpolation   
console.log(output);


console.log("Apna \n College");
console.log("Apna \t College");
// String Methods in JavaScript
// JavaScript provides a variety of built-in string methods that allow you to manipulate and work with strings in different ways. Here are some commonly used string methods:
let str = "Hello, World!";
console.log(str.toUpperCase()); // Converts the string to uppercase
console.log(str.toLowerCase()); // Converts the string to lowercase
console.log(str.length); // Returns the length of the string
console.log(str.indexOf("World")); // Returns the index of the first occurrence of "World"
console.log(str.slice(0, 5)); // Extracts a portion of the string (from index 0 to 5)
console.log(str.replace("World", "JavaScript")); // Replaces "World" with "JavaScript"
console.log(str.split(", ")); // Splits the string into an array based on the specified separator
console.log(str.trim()); // Removes whitespace from both ends of the string
console.log(str.includes("Hello")); // Checks if the string includes "Hello"
console.log(str.startsWith("Hello")); // Checks if the string starts with "Hello"
console.log(str.endsWith("!")); // Checks if the string ends with "!"


let str1 = "1234567";
console.log(str.slice(0,3)); // Extracts "123" from the string
console.log(str.slice(3)); // Extracts "4567" from the string   


// String Concatenation
// String concatenation is the process of combining two or more strings into one. In JavaScript, you can concatenate strings using the + operator or the += operator.
let str2 = "Hello";
let str3 = "World";
let concatenatedString = "I am learning coding from" + str2 + str3; // Using the + operator for concatenation
console.log(concatenatedString); // Output: "Hello World"  



let str4 = "IloveJs";
console.log(str.charAt(3)); // The charAt() method returns the character at the specified index in a string. In this case, it will return the character at index 3 of the string "Hello, World!", which is "l".
console.log(str.charCodeAt(0)); // The charCodeAt() method returns the Unicode value of the character at the specified index in a string. In this case, it will return the Unicode value of the character at index 0 of the string "Hello, World!", which is 72 (the Unicode value for "H").    

// Let's Practice
// Question # 1 Prompt the user to enter their  full name. Generate a username for them based on the input. Start usrname with @, followed by their full name and ending with the full name lengtth.
let fullName = prompt("Enter your full name:");
let username = "@" + fullName.replace(/\s/g, '') + fullName.length; // Remove spaces and concatenate with length
console.log("Generated username: " + username);


// Question # 2 Prompt the user to enter a string. Count the number of vowels in the string and display the count to the user.
let userString = prompt("Enter a string:");
let vowelCount = 0;
let vowels = "aeiouAEIOU"; // Include both lowercase and uppercase vowels
for (let i = 0; i < userString.length; i++) {
    if (vowels.includes(userString[i])) {
        vowelCount++;
    }
}
console.log("Number of vowels in the string: " + vowelCount);

// Question # 3 Prompt the user to enter a string. Reverse the string and display the reversed string to the user.
let originalString = prompt("Enter a string to reverse:");
let reversedString = originalString.split('').reverse().join('');
console.log("Reversed string: " + reversedString);

// Question # 4 Prompt the user to enter a string. Check if the string is a palindrome (reads the same backward as forward) and display the result to the user.
let palindromeString = prompt("Enter a string to check for palindrome:");
let cleanedString = palindromeString.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
let isPalindrome = cleanedString === cleanedString.split('').reverse().join('');
if (isPalindrome) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}

// Question # 5 Prompt the user to enter a string. Count the number of words in the string and display the count to the user.
let sentence = prompt("Enter a string to count words:");
let wordCount = sentence.trim().split(/\s+/).length; // Split the string by whitespace and count the words
console.log("Number of words in the string: " + wordCount);

// Question # 6 Prompt the user to enter a string. Convert the first letter of each word to uppercase and display the modified string to the user.
let inputString = prompt("Enter a string to capitalize the first letter of each word:");
let capitalizedString = inputString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log("Modified string: " + capitalizedString);


// Question # 7 Prompt the user to enter a string. Remove all whitespace from the string and display the modified string to the user.
let stringWithWhitespace = prompt("Enter a string to remove whitespace:");
let stringWithoutWhitespace = stringWithWhitespace.replace(/\s/g, ''); // Remove all whitespace using regex
console.log("String without whitespace: " + stringWithoutWhitespace);   


// Question # 8 Prompt the user to enter a string. Check if the string contains the word "JavaScript" and display the result to the user.
let checkString = prompt("Enter a string to check for the word 'JavaScript':");
if (checkString.includes("JavaScript")) {
    console.log("The string contains the word 'JavaScript'.");
}

// Question # 9 Prompt the user to enter a string. Replace all occurrences of the word "cat" with "dog" and display the modified string to the user.
let stringToModify = prompt("Enter a string to replace 'cat' with 'dog':");
let modifiedString = stringToModify.replace(/cat/g, 'dog'); // Replace all occurrences of "cat" with "dog" using regex
console.log("Modified string: " + modifiedString);  


// Question # 10 Prompt the user to enter a string. Check if the string starts with "Hello" and ends with "!" and display the result to the user.
let stringToCheck = prompt("Enter a string to check if it starts with 'Hello' and ends with '!':");
if (stringToCheck.startsWith("Hello") && stringToCheck.endsWith("!")) {
    console.log("The string starts with 'Hello' and ends with '!'.");
}   


// Question # 11 Prompt the user to enter a string. Count the number of times the letter "a" appears in the string and display the count to the user.
let stringToCount = prompt("Enter a string to count the number of times the letter 'a' appears:");
let countA = 0; 
for (let i = 0; i < stringToCount.length; i++) {
    if (stringToCount[i].toLowerCase() === 'a') { // Check for both uppercase and lowercase 'a'
        countA++;
    }   
}
console.log("Number of times the letter 'a' appears in the string: " + countA);


