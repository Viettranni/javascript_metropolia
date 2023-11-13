'use strict';
let name = prompt('Please enter your name!')
let character;
let result = Math.floor(Math.random()*4) + 1;

if (result === 1){
  character = "Ravenclaw.";
} else if (result === 2) {
  character = "Hufflepuff.";
} else if (result === 3) {
  character = "Slytherin.";
} else if (result === 4) {
  character = "Gryffindor.";
} else {
  character = "Not in the House";
}

const finalAnswer = `${name}, you are ${character}`

document.querySelector('#target').innerHTML = finalAnswer;