// Events in JS
// The chage in the state of an object is known as an event.
// Events are fired to notify code of "intersting changes" that may affect code execution.

//let btn1 = document.querySelector("#btn1");

//btn1.onClick = () => {
//console.log("btn1 was clicked");
// let a =25;
// a++;
// console.log(a);
//};


//let btn2 = document.querySelector("#btn2");

//btn2.ondbclick = () => {
//    console.log('button was clicked two times'); 
//};


//let div = document.querySelector("div");

//div.onmouseover = (evt) => {
//  console.log(evt);
//console.log(evt.type);
//console.log(evt.target);
//console.log("you are inside in div");
//};


//let btn3 = document.querySelector("#btn3");
//btn3.onClick = (evt) => {
//  console.log(evt);
//console.log(evt.type);
//console.log(evt.target);
//};

// Event listeners
//let btn3 = document.querySelector("#btn3");

//btn3.addEventListener("click", () => {
//  console.log("button3 was clicked!");
//});



//btn3.addEventListener("click", () => {
//  console.log("button3 was clicked! Handler 1");
//});


//btn3.addEventListener("click", () => {
//  console.log("button3 was clicked! Handler 2");
//});

//const handler3 = () => {
//  console.log("button3 was clicked! Handler 3");
//}
//btn3.addEventListener("click", handler3);


//btn3.addEventListener("click", () => {
//  console.log("button3 was clicked! Handler 4");
//});


//btn3.removeEventListener("click", handler3);

// let's Practice
// Create a toogle button that changes the screen to dark-mode when clicked and light mode when clicked again.


let modeBtn = document.querySelector("#mode");
let currMode = "light"; // dark

modeBtn.addEventListener("click",()=> {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "black";
    }

    console.log(currMode);
});