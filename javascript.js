function computerPlay() {
    const weaponsList = ["Rock", "Paper", "Scissors"];
    const weaponsChoice = weaponsList[Math.floor(Math.random()*weaponsList.length)];
    return(weaponsChoice);
}

function playSingleRound(playerSelection, computerSelection) {
    let playSelLower = playerSelection.toLowerCase();
    let playSelUpper = playSelLower[0].toUpperCase();
    let playSel = playSelUpper + playSelLower.slice(1,);
    let compSel = computerSelection;

    if ((playSel != "Rock") && (playSel != "Paper") && (playSel != "Scissors")) {
        return "You haven't entered a valid weapon! Please try again!";                    
    } else if (playSel == compSel) {
        return `${playSel} vs. ${compSel} - Draw!`;
    } else if ((playSel == "Rock" && compSel == "Paper") || (playSel == "Paper" && compSel == "Scissors") || (playSel == "Scissors" && compSel == "Rock")) {
        return `You Lose! ${compSel} beats ${playSel}!`;
    } else {
        return `You Win! ${playSel} beats ${compSel}!`;
    }
}

function game() {
    let playersResult = 0;
    let computersResult = 0;

    for(let i = 1; i < 6; i++) {
        let playersChoice = prompt(`Round Nr. ${i}: Please choose a weapon!`, text = "");
        let singleResult = playSingleRound(playersChoice, computerPlay());
        console.log(singleResult);
        if (singleResult.startsWith("You Win!")) {
            playersResult += 1;
        } else if (singleResult.startsWith("You Lose!")) {
            computersResult += 1;
        } else if (singleResult.endsWith("Draw!")) {
            playersResult += 1;
            computersResult += 1;
        } else {
            i--;
        }
        let overallResult = `Result after round ${i} >>> Player ${playersResult} : ${computersResult} Computer`;
        console.log(overallResult);
    }

    if (playersResult > computersResult) {
        console.log("Congratulations, you beat the machine!");
    } else if (playersResult < computersResult) {
        console.log("So sorry, but you lost miserable...")
    } else {
        console.log("Looks like there can't be a winner today.")
    }
}

game();