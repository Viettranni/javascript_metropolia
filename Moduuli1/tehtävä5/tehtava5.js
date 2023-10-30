'use strict'

let enterYear = prompt('Please enter the Year!')
enterYear = parseInt(enterYear)

let character;

if ((enterYear % 100 === 0 && enterYear % 400 === 0) || (enterYear % 4 === 0 && enterYear % 100 !== 0)) {
  character = `The ${enterYear} Year IS a Leap Year!`;
} else {
  character = `The ${enterYear} Year IS NOT a Leap Year!`;
}

const finalAnswer = character

document.querySelector('#target').innerHTML = finalAnswer;
