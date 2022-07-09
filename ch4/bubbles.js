var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

let totalTests = 0;
let highestScore = 0;
let bestSolution = [];

// Bubble solution #0 scores: 60
// ...
for (let i = 0; i < scores.length; i++) {
  console.log(`Bubble solution #${i} scores: ${scores[i]}`);

  if (scores[i] > highestScore) {
    highestScore = scores[i];
  };

  totalTests = i + 1;
};


// Best solution
for (let i = 0; i < scores.length; i++) {
  if (scores[i] == highestScore) {
    bestSolution.push(i)
  };
};

// PRINT all the tests like these...

// Bubbles tests: 36
// Hieghest bubble score: 69
// Solutions with highest score: #11, #18

console.log(`Bubbles tests: ${totalTests}`);
console.log(`Hieghest bubble score: ${highestScore}`);
console.log(`Solutions with highest score: ${bestSolution}`);