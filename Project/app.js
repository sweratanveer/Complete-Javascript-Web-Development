let Boxes =document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turnO = true;

const resetGame = () => {
    turnO = true;
    EnableBoxes();
    msgContainer.classList.add("hide");
}


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

Boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            Box.innerText = "O";
            turnO = false;
        }
        else {
            Box.innerText = "X";
            turnO = true;
        }
        
        Box.disabled = true;

        checkWinner();

    });
});

const disableBoxes = () => {
    for (let Box of Boxes) {
        Box.diasbaled = true;
    }
}

const EnableBoxes = () => {
    for (let Box of Boxes) {
        Box.Enabled= false;
        Box.innerText= "";
    }
}


const showWinner= (winner) => {
    msg.innerText = 'Congratulations, Winner is $(winner)';
    msgContainer.classList.remove["hide"];
    disableBoxes();
}
const checkWinner = () => {
    for ( let pattern of winPatterns) {
       let pos1Val = Boxes[pattern[0]].innerText;
       let pos2Val = Boxes[pattern[1]].innerText;
       let pos3Val = Boxes[pattern[2]].innerText;

       if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val);

            showWinner();
        }
       }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);