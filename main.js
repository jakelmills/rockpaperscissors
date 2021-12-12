const options = ['rock', 'paper', 'scissors']

const computerPlay = function(){
  const randomChoice = Math.floor(Math.random()*3)
  const computerChoice = options[randomChoice].toLowerCase()
  return computerChoice
}



const playRound = function(){
  const computerChoice = computerPlay();
  let playerChoice = prompt('enter your choice').toLowerCase()
  if (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !=="paper"){
    playerChoice = prompt('please enter a valid choice').toLowerCase()
  }
  console.log('you chose - ' + playerChoice)
  console.log('the computer chose - ' + computerChoice)
  if (playerChoice === computerChoice) {
    return result = "it's a draw"
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return result = 'you win'
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return result = 'you win'
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return result = 'you win'
  } else {
    return result = 'you lose'
    }

}

const game = function(){
  for(let step=0; step<5; step++){
    playRound()
    console.log(result)
  }
}
