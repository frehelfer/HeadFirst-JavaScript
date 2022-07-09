var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

let bestSolution = [];

// Functions
function printAndGetHighScore(scores) {
  let highestScore = 0;

  for (let i = 0; i < scores.length; i++) {
    console.log(`Bubble solution #${i} scores: ${scores[i]}`);

    if (scores[i] > highestScore) {
      highestScore = scores[i];
    };
  };
  return highestScore;
};

function getBestResults(scores) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highestScore) {
      bestSolution.push(i);
    };
  };
  return bestSolution;
};

function getMostEffectiveSolution(scores, costs, highestScore) {
  let index = 0;
  let cost = 100;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highestScore && cost > costs[i]) {
      index = i;
      return index;
    };
  };
};

// Execute the functions and store the result.
let highestScore = printAndGetHighScore(scores);
let mostCostEffective = getMostEffectiveSolution(scores, costs, highestScore);

//Console.log the informations
console.log(`Bubbles tests: ${scores.length}`);
console.log(`Hieghest bubble score: ${highestScore}`);
console.log(`Solutions with highest score: ${getBestResults(scores)}`);
console.log(`Bubble solution #${mostCostEffective} is the most cost effective.`)