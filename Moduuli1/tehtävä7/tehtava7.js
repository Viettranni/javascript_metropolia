'use strict';

const element = document.querySelector('#target')

let amountRolls = prompt('Enter the amount of the Rolls!')
amountRolls = parseInt(amountRolls)

// Let's say that the roll has 6 faces
function rollDie() {
  return Math.floor(Math.random()*6)+1;
}

// Throw the requested amount of rolls and add the rolls into sum
let sum = 0;
for (let i = 0; i < amountRolls; i++) {
  const rollResult = rollDie();
  sum +=rollResult
}

element.innerHTML = ` Rolls counted: ${sum} `;
