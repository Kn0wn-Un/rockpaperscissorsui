let computerPoints = 0, playerPoints = 0;
function round(playerSelection, computerSelection)
{   
    let selWinner = [
                        ["Draw! Rock and Rock", "You Win! Paper beats Rock", "You Lose! Rock beats Scissors"],
                        ["You Lose! Paper beats Rock", "Draw! Paper and Paper", "You Win! Scissors beats Paper"],
                        ["You Win! Rock beats Scissors", "You Lose! Scissors beats Paper", "Draw! Scissors and Scissors"]
                    ]
    document.querySelector("#roundRes").textContent = selWinner[computerSelection][playerSelection];
    if(selWinner[computerSelection][playerSelection].search("Win") != -1)
        return(1);
    else if(selWinner[computerSelection][playerSelection].search("Lose") != -1)
        return(-1);
    return(0);
}
function game(playerSelection)
{   
    let roundPoints;
    computerSelection = Math.floor(Math.random() * 3);
    switch(computerSelection){
        case 0: document.querySelector("#oAction").textContent = "Computer plays: Rock";
                break;
        case 1: document.querySelector("#oAction").textContent = "Computer plays: Paper";
                break;
        case 2: document.querySelector("#oAction").textContent = "Computer plays: Scissors";
                break;
    }
    roundPoints = round(playerSelection, computerSelection);
    switch(roundPoints)
    {
        case 1: playerPoints++;
                document.querySelector("#playerScore").textContent = playerPoints;
                break;
        case -1: computerPoints++;
                document.querySelector("#computerScore").textContent = computerPoints;
                break;
    }
    if(computerPoints == 5 || playerPoints == 5){
        let winner = ((playerPoints>computerPoints)?"Player":"Computer")+" Wins!";
        dec = document.querySelector("#gameRes");
        dec.textContent = winner ;
        document.querySelector("#roundRes").textContent="Reload page to play again";
        dec.style.fontSize = "50px";
        dec.style.backgroundColor = "Green";
        document.querySelector("#inputs").remove();
    }
}
btns = document.querySelectorAll("button");
btns.forEach(element => {
    element.addEventListener("click",()=>{
        game(element.getAttribute("value"));
    });  
});