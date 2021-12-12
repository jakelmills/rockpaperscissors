const options = ['rock', 'paper', 'scissors']

const computerPlay = function(){
  const randomChoice = Math.floor(Math.random()*3)
  const computerChoice = options[randomChoice].toUpperCase()
  return computerChoice
}



const playRound = function(){
  const computerChoice = computerPlay();
  let playerChoice = prompt('enter your choice').toUpperCase()
  if (playerChoice !== "ROCK" && playerChoice !== "SCISSORS" && playerChoice !=="PAPER"){
    playerChoice = prompt('please enter a valid choice').toUpperCase()
  }
  console.log('you chose - ' + playerChoice)
  console.log('the computer chose - ' + computerChoice)
  if (playerChoice === computerChoice) {
    result = "it's a draw"
  } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
    result = 'you win'
  } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
    result = 'you win'
  } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
    result = 'you win'
  } else {
    result = 'you lose'
    }
  console.log(result)
}

const game = function(){
  for(let step=0; step<5; step++){
    playRound()
  }
}
