
// Function getRandomLocation
function getRandomLocation() {
  return Math.floor(Math.random() * 7);
}

// Address random number to location
let location1 = getRandomLocation();
let location2 = getRandomLocation();
let location3 = getRandomLocation();

console.log(location1, location2, location3);

while (location2 == location1) {
  location2 = getRandomLocation();
}

while (location3 == location2 || location3 == location1) {
  location3 = getRandomLocation();
}

console.log(location1, location2, location3);


// Create variables to the game logic.
let guess;
let guesses = 0;
let hits = 0;

let isSunk = false;


// Start the game
while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");

  if (guess == null) {
    isSunk = true;

  } else if (isNaN(guess) || guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");

  }  else {
    guesses++;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits++;

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");

      } else {
        alert("Hit!");
      };

    } else {
      alert("Miss");

    };
  };
};


// Alert score!
score = hits / guesses;

if (guesses == 3 && score >= 0 ) {
  alert(`You took ${guesses} guesses to sink the battleship, 
  wich means your shooting accuary was ${score}.`);

} else {
  alert("Game over!");
}