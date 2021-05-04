const game = () => {
  let pscore = 0;
  let cscore = 0;

  // function to faeout on click lets start and fade in the game
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const match = document.querySelector(".match");
    const introScreen = document.querySelector(".intro");
    playButton.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  }
  // to play match

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerhand = document.querySelector(".computer-hand");
    const computerOptions = ['rock', 'paper', 'scissors'];
    const hands =document.querySelectorAll('.hands img');
    hands.forEach(hand=>{
      hand.addEventListener('animationend',function(){
        this.style.animation='';
      });
    })



    options.forEach((option) => {
      option.addEventListener('click', function () {

        //computeroptions
        const computerNumber = Math.floor(Math.random() * 3);//Math.random generates a number between 0 and 1 so times 3 gives us index.
        const computerChoice = computerOptions[computerNumber];
        
        setTimeout(()=>{
          // gamelogic
        compareHands(this.textContent, computerChoice);
        // Image updates
        playerHand.src = `./assets/${this.textContent}.png`;
        computerhand.src = `./assets/${computerChoice}.png`;

        },2000);

        // animations
        playerHand.style.animation = "shakePlayer 2s ease";
        computerhand.style.animation = "shakecomputer 2s ease";
      });
    });
  }
  const winner = document.querySelector('.winner');
  // score update
  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const ComputerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pscore;
    ComputerScore.textContent = cscore;

  }

  // game logic
  const compareHands = (PlayerChoice, ComputerChoice) => {

    if (PlayerChoice === ComputerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    if (PlayerChoice === 'rock') {
      if (ComputerChoice === 'paper') {
        winner.textContent = "Computer wins";
        cscore++;
        updateScore();
        return;
      }
      else {
        winner.textContent = "Player wins";
        pscore++;
        updateScore();
        return;
      }
    }
    if (PlayerChoice === 'paper') {
      if (ComputerChoice === 'scissors') {
        winner.textContent = "Computer wins";
        cscore++;
        updateScore();
        return;
      }
      else {
        winner.textContent = "Player wins";
        pscore++;
        updateScore();
        return;
      }
    }
    if (PlayerChoice === 'scissors') {
      if (ComputerChoice === 'rock') {
        winner.textContent = "Computer wins";
        cscore++;
        updateScore();
        return;
      }
      else {
        winner.textContent = "Player wins";
        pscore++;
        updateScore();
        return;
      }

    }
  }



  // all inner functions
  startGame();
  playMatch();

}
game();