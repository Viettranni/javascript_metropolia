'use strict'

let enterYear = parseInt(prompt('Enter a Year!'));

let finalAnswer;

if ((enterYear % 4 === 0 && enterYear % 100 !== 0) || enterYear % 400 === 0) {
  finalAnswer = `The ${enterYear} Year is a leap`;
} else {
  finalAnswer = `The ${enterYear} Year is a non-leap`;
}

document.querySelector('#target').innerHTML = finalAnswer;
