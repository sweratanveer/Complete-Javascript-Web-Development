// What is DOM?
 // DOM stands for Document Object Model. It is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (such as an element, attribute, or text). The DOM allows developers to manipulate the content, structure, and style of a web page dynamically using JavaScript.  

// What is Window Object?
// The Window object is the global object in a web browser environment. It represents the browser window and provides properties and methods for interacting with the browser and its features. The Window object is the top-level object in the JavaScript hierarchy and serves as the global scope for JavaScript code running in a web page. It allows developers to access and manipulate various aspects of the browser, such as the document, history, location, and more.


// DOm Manipulation
// DOM manipulation refers to the process of using JavaScript to interact with and modify the structure, content, and style of a web page. The Document Object Model (DOM) represents the HTML document as a tree of objects, where each object corresponds to an element, attribute, or text node in the document. By manipulating the DOM, developers can dynamically change the content and appearance of a web page in response to user interactions or other events. This allows for creating interactive and dynamic web applications.    

// Selecting With ID
// The getElementById() method is a commonly used method in JavaScript to select an HTML element based on its unique ID attribute. It returns a reference to the first element with the specified ID, allowing you to manipulate or access its properties and content. This method is part of the Document Object Model (DOM) and is widely used for DOM manipulation in web development.
// Advantages of getElementById() method:
// 1. Fast and Efficient: The getElementById() method is optimized for performance and is generally faster than other DOM selection methods, such as getElementsByClassName() or querySelectorAll(), because it directly accesses the element by its unique ID.
// 2. Unique Selection: Since IDs are meant to be unique within a document, using getElementById() ensures that you are selecting a single, specific element, which can help prevent unintended consequences when manipulating the DOM.
// 3. Easy to Use: The syntax for getElementById() is straightforward and easy to understand, making it a popular choice for developers when they need to select an element by its ID.  
let element = document.getElementById("myElement");
console.log(element);

// Selecting with Class
// The getElementsByClassName() method is a commonly used method in JavaScript to select HTML elements based on their class attribute. It returns a live HTMLCollection of all elements that have the specified class name, allowing you to manipulate or access their properties and content. This method is part of the Document Object Model (DOM) and is widely used for DOM manipulation in web development.
// Advantages of getElementsByClassName() method:
// 1. Multiple Element Selection: The getElementsByClassName() method allows you to select multiple elements that share the same class name, making it useful for applying styles or manipulating groups of elements at once.
// 2. Live Collection: The HTMLCollection returned by getElementsByClassName() is live, meaning that it automatically updates as the DOM changes. This can be advantageous when you need to work with dynamic content that may be added or removed from the page.
// 3. Easy to Use: The syntax for getElementsByClassName() is straightforward and easy to understand, making it a popular choice for developers when they need to select elements by their class name.
let elements = document.getElementsByClassName("myClass");
console.log(elements);

// Selecting with tag
// The getElementsByTagName() method is a commonly used method in JavaScript to select HTML elements based on their tag name. It returns a live HTMLCollection of all elements with the specified tag name, allowing you to manipulate or access their properties and content. This method is part of the Document Object Model (DOM) and is widely used for DOM manipulation in web development.
// Advantages of getElementsByTagName() method:
// 1. Multiple Element Selection: The getElementsByTagName() method allows you to select multiple elements that share the same tag name, making it useful for applying styles or manipulating groups of elements at once.
// 2. Live Collection: The HTMLCollection returned by getElementsByTagName() is live, meaning that it automatically updates as the DOM changes. This can be advantageous when you need to work with dynamic content that may be added or removed from the page.
// 3. Easy to Use: The syntax for getElementsByTagName() is straightforward and easy to understand, making it a popular choice for developers when they need to select elements by their tag name.


let tags = document.getElementsByTagName("p");
console.log(tags);  


// Selecting with querySelector
// The querySelector() method is a powerful and versatile method in JavaScript that allows you to select the first element that matches a specified CSS selector. It returns a reference to the first matching element, allowing you to manipulate or access its properties and content. This method is part of the Document Object Model (DOM) and is widely used for DOM manipulation in web development.
// Advantages of querySelector() method:
// 1. Flexible Selection: The querySelector() method allows you to use any valid CSS selector to select elements, giving you a lot of flexibility in how you target elements in the DOM.        
// 2. First Match Selection: The querySelector() method returns only the first element that matches the specified selector, which can be useful when you want to target a specific element without having to worry about multiple matches.
// 3. Easy to Use: The syntax for querySelector() is straightforward and easy to understand, making it a popular choice for developers when they need to select elements using complex selectors or when they want to select a single element based on its attributes, classes, or other criteria.
let element1 = document.querySelector(".myClass");
console.log(element1);

// Selecting with querySelectorAll
// The querySelectorAll() method is a powerful and versatile method in JavaScript that allows you to select all elements that match a specified CSS selector. It returns a static NodeList of all matching elements, allowing you to manipulate or access their properties and content. This method is part of the Document Object Model (DOM) and is widely used for DOM manipulation in web development.
// Advantages of querySelectorAll() method:
// 1. Flexible Selection: The querySelectorAll() method allows you to use any valid CSS selector to select elements, giving you a lot of flexibility in how you target elements in the DOM.        
// 2. Multiple Element Selection: The querySelectorAll() method returns a static NodeList of all elements that match the specified selector, which can be useful when you want to target multiple elements without having to worry about live collections or updates.
// 3. Easy to Use: The syntax for querySelectorAll() is straightforward and easy to understand, making it a popular choice for developers when they need to select elements using complex selectors or when they want to select multiple elements based on their attributes, classes, or other criteria.
let elements1 = document.querySelectorAll(".myClass");
console.log(elements1); 

// The console.dir() method is a useful tool in JavaScript for inspecting and debugging objects. It displays an interactive list of the properties of the specified JavaScript object, allowing developers to explore its structure and values in a more detailed way than console.log(). When you use console.dir(), it provides a hierarchical view of the object's properties, making it easier to understand the object's structure and navigate through its properties and methods. This can be particularly helpful when working with complex objects or when you want to inspect the properties of DOM elements in a more organized manner.      

console.dir(document.body);

// The console.table() method is a useful tool in JavaScript for displaying data in a tabular format in the console. It takes an array of objects or an object with properties and values and displays it as a table, making it easier to read and analyze the data. Each object in the array represents a row in the table, and the properties of the objects represent the columns. This method is particularly helpful when you want to visualize data structures, such as arrays of objects, in a more organized and readable way. It can be used for debugging purposes or for presenting data in a clear format during development.

let data = [ 
    { name: "Swera", age: 20 },
    { name: "Rana", age: 22 },
    { name: "Tanveer", age: 25 }
];
console.table(data);

// The console.time() and console.timeEnd() methods are used in JavaScript to measure the time taken to execute a block of code. The console.time() method starts a timer with a specified label, and the console.timeEnd() method stops the timer and logs the elapsed time to the console. This can be useful for performance testing and debugging, allowing developers to identify how long certain operations or functions take to execute. By using these methods, you can gain insights into the efficiency of your code and optimize it accordingly.

console.time("myTimer");    
// Some code to be timed
for (let i = 0; i < 1000000; i++) {
    // Simulating a time-consuming operation
}   
console.timeEnd("myTimer");

// The console.error() method is used in JavaScript to log error messages to the console. It is typically used to indicate that an error has occurred in the code, and it can help developers identify and debug issues in their applications. When you use console.error(), it displays the message in red text, making it stand out from regular log messages. This method can be particularly useful for logging exceptions, warnings, or any other type of error information that you want to highlight during development or debugging.

console.error("An error occurred while processing the data.");

// The console.warn() method is used in JavaScript to log warning messages to the console. It is typically used to indicate that something unexpected or potentially problematic has occurred in the code, but it may not necessarily be an error. When you use console.warn(), it displays the message in yellow text, making it stand out from regular log messages. This method can be particularly useful for logging deprecation warnings, potential issues, or any other type of information that you want to highlight as a warning during development or debugging.

console.warn("This feature is deprecated and may be removed in future versions.");  

// The console.info() method is used in JavaScript to log informational messages to the console. It is typically used to provide general information or status updates about the execution of code, without indicating an error or warning. When you use console.info(), it displays the message in blue text, making it stand out from regular log messages. This method can be particularly useful for logging progress updates, configuration details, or any other type of information that you want to highlight as informational during development or debugging.

console.info("The application has started successfully.");

// The console.debug() method is used in JavaScript to log debug messages to the console. It is typically used for debugging purposes, allowing developers to output detailed information about the execution of code, such as variable values, function calls, or any other relevant data that can help identify and troubleshoot issues. When you use console.debug(), it displays the message in a standard format, similar to console.log(), but it is intended for debugging and may be filtered out in certain environments or configurations.

console.debug("Debugging information: Variable x has value 42.");

// The console.clear() method is used in JavaScript to clear the console of all previous messages. When you call console.clear(), it removes all existing log messages, errors, warnings, and other output from the console, providing a clean slate for new messages to be displayed. This can be particularly useful during development or debugging when you want to focus on new output without being distracted by previous logs.
//console.clear();

// The console.group() and console.groupEnd() methods are used in JavaScript to create collapsible groups of log messages in the console. The console.group() method starts a new group with a specified label, and the console.groupEnd() method ends the current group. This allows developers to organize related log messages together, making it easier to read and analyze the output in the console. When you use console.group(), it indents subsequent log messages until you call console.groupEnd(), which helps visually distinguish different sections of logs and can improve readability during development or debugging.

console.group("User Information");
console.log("Name: Swera");
console.log("Age: 20");
console.groupEnd(); 

// The console.assert() method is used in JavaScript to log an error message to the console if a specified condition is false. It takes two arguments: the first is the condition to be evaluated, and the second is the message to be displayed if the condition is false. If the condition evaluates to true, no message will be logged. This method can be particularly useful for debugging purposes, allowing developers to assert that certain conditions are met during code execution and quickly identify any issues when those conditions are not satisfied.

let x = 10;
console.assert(x > 20, "Assertion failed: x is not greater than 20.");  

// The console.count() method is used in JavaScript to log the number of times a specific label has been called in the console. It takes a single argument, which is the label to be counted. Each time console.count() is called with the same label, it increments the count and logs the current count value to the console. This can be particularly useful for tracking how many times a certain piece of code is executed or how many times a specific event occurs during development or debugging.

console.count("Function called");
console.count("Function called");
console.count("Function called");   


