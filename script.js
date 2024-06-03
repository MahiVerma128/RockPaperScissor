let userScore = 0;
let compScore = 0;

const images = document.querySelectorAll(".image");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const playGame = (userChoice) => {

    // Convert userChoice to have the first letter capitalized
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice == compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            // paper,scissor
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissor
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            // rock,paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


images.forEach((image) => {
    image.addEventListener("click", () => {
        const userChoice = image.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Drawn! Play again."
    msg.style.backgroundColor = "rgb(6, 6, 43)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};





