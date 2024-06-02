let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}
const drawGame = () => {
    msg.innerHTML = "Game was Draw . Play Again !"
    msg.style.backgroundColor = "#081b31"
}

const showWin = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `You Win ! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `You Lose !  ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);
    if (userChoice === compChoice) {

        console.log("Game Was Draw");
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
           userWin =  compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock , scissors
            compChoice === "scissors" ? false : true; 
        }else{
            // rock , paper
            compChoice === "rock" ? false : true;
        }
        showWin(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id")
    playGame(userChoice)
    })
})