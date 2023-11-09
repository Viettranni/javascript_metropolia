'use strict';

let primeChecker = prompt('Please Give an Integer: ')

primeChecker = parseInt(primeChecker)

let finalAnswer;

function isPrime(primeChecker) {
  if (primeChecker <= 1) {
    finalAnswer = 'The integer IS NOT Prime!'
    return false;
  }

  for (let i = 2; i <= Math.sqrt(primeChecker); i++) {
    if (primeChecker % i === 0) {
      finalAnswer = 'The integer IS NOT Prime!'
      return false;
    }
  }

  finalAnswer = 'The integer IS Prime!'
  return true;
}

isPrime(primeChecker)

document.querySelector('#target').innerHTML = finalAnswer;
