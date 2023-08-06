const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winingPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// let's create a function to initialise the game

function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    // UI update
    boxes.forEach((box,  index) =>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //one more thing is missing, initialise box with css properties again
        box.classList = `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer="O" ;
    }else{
        currentPlayer ="X";
    }
    // UI update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
    let answer = "";

    winingPosition.forEach((position) =>{
        if((gameGrid[position[0]] !== "" ||gameGrid[position[0]] !== "" || gameGrid[position[0]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) &&(gameGrid[position[1]] === gameGrid[position[2]])){
            // check winner is x
            if(gameGrid[position[0]] === "X"){
                answer = "X";
            }else{
                answer ="O";
            }
            // disable pointer event
            boxes.forEach((box) =>{
                box.style.pointerEvents = "none";
            });

            // Adding color
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });
    if(answer !== ""){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "")
            fillCount++;
    });
    // Board is filled game is TIE
    if(fillCount === 9){
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }
};

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer; 
        gameGrid[index]= currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swap
        swapTurn();
        // check game over
        checkGameOver();
    }
};

boxes.forEach((box, index) => {
    box.addEventListener('click', () =>{
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);