// get user choice 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('You need to type scissors, rock or paper');
    }
  };
//   determine computer choice
  
  const getComputerChoice  = ()=> {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      return 'rock';
    } else if (choice === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };
  
  
//   check for winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }; 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won';
      } else {
        return 'You won';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won';
      } else {
        return 'You won';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won';
      } else {
        return 'You won';
      }
    }
    if (userChoice === 'bomb') {
      return 'You won'
    }
  }
  
// game
  
  const playGame = ()=> {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`User played ${userChoice}`)
    console.log(`Computer played ${computerChoice}`)
    return determineWinner(userChoice, computerChoice)
  }
  
  console.log(playGame())