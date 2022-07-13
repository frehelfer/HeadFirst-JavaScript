// Selectors
const message = document.getElementById('message-area');
const gameFieldElements = document.querySelectorAll('.game-board li');
const restartBtn = document.querySelector('.btn');

let guesses = 0;
let hits = 0;
let miss = 0;

// Start game
const locations = generateRandomArr(10, 49, 1);

  for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField)
  };

restartBtn.addEventListener('click', restartGame)


// Functions
function generateRandomArr(length, max, min) {
  const resultsArr = [];
  for (let i = 0; i < length; i++) {
    const newNumber = Math.floor(Math.random() * (max - min)) + min;
    resultsArr.includes(newNumber) ? length += 1 : resultsArr.push(newNumber);
  }
  return resultsArr;
}

function selectGameField(event, score) {
  let id = Number(event.target.id);

  console.log(event.target.id)
  if (guesses < 10) {
    if (event.target.classList.contains('disabled')) {
      message.innerHTML = "You already chosed this place";

    } else if (locations.includes(id)) {
      event.target.classList.add('disabled');
      event.target.classList.add('hit');
      message.innerHTML = "You sank my battleship!!"
      guesses++
      hits++;

    } else {
      event.target.classList.add('disabled');
      event.target.classList.add('miss');
      message.innerHTML = "Miss!"
      guesses++
      miss++
    };
  } else {
    score = hits / guesses * 10;
    message.innerHTML = `Your score is ${score}`;
    restartBtn.classList.add('displayBtn');
  }
};

function restartGame() {
  window.location.reload(false)
  restartBtn.classList.remove('displayBtn');
}