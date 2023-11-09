'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateProbability(numDice, targetSum, numSimulations) {
    let successCount = 0;

    for (let i = 0; i < numSimulations; i++) {
        let diceSum = 0;
        for (let j = 0; j < numDice; j++) {
            diceSum += getRandomInt(1, 6); // Assuming six-sided dice
        }

        if (diceSum === targetSum) {
            successCount++;
        }
    }

    return successCount / numSimulations;
}

// Example usage
const numDice = Number(prompt('Enter the number of dice: '));
const targetSum = Number(prompt('Enter the target sum: '));
const numSimulations = 10000;

const probability = calculateProbability(numDice, targetSum, numSimulations);

document.body.innerHTML = `<p>Probability to get sum ${targetSum} with ${numDice} dice is ${(probability * 100).toFixed(2)}%</p>`;