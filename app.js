let p1;
let p2;
let p3;
let o;
let x;
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#btnReset");
let winner = document.querySelector("#winner");
let newGame = document.querySelector("#newGame");
let score = document.querySelector("#score");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// main game
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
        // reset.classList.remove("hide");
    })
});
const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]] ,boxes[pattern[2]]);
        p1 = boxes[pattern[0]].innerText;
        p2 = boxes[pattern[1]].innerText;
        p3 = boxes[pattern[2]].innerText;
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1===p2 && p2===p3){
                console.log("winner",p1)
                result(p1);
                scoreCount(p1);
            }
        }
    }
};
const result=(p1)=>{
    winner.innerText = `Congrats Winner is ${p1}!`;
    disablebox();
    // newGame.classList.remove("hide");
};
const disablebox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};

//score
// let scoreCount=(p1)=>{
//     o=0;
//     x=0;
//     if(p1 == o){
//         o++;
//         score.innerText = `${o}`;
//     }
//     else{
//         x++;
//         score.innerText=`${x}`;
//     }
// }

// reset button
const resetbtn=()=>{
    turnO=true;
    enablebox();
    // newGame.classList.add("hide");
    // reset.classList.add("hide");
}
const enablebox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
reset.addEventListener("click",resetbtn);
newGame.addEventListener("click",resetbtn);


