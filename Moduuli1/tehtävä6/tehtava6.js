'use strict';

let finalAnswer;

const userConfirmed = confirm('Should I calculate the square root?');

if (userConfirmed) {
    let inputNumber;

    while (true) {
        inputNumber = prompt('Give me a number');
        inputNumber = parseInt(inputNumber);

        if (inputNumber >= 0) {
            break;
        }

        alert('Please enter a non-negative number.');
    }

    const squareRoot = Math.sqrt(inputNumber);
    finalAnswer = `The square root is ${squareRoot}!`;
} else {
    finalAnswer = 'The square root is not calculated.';
}

document.querySelector('#target').innerHTML = finalAnswer;
