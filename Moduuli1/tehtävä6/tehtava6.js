'use strict';

let finalAnswer;

const userConfirmed = confirm('Should I calculate the square root?');

if (userConfirmed) {
    let inputNumber;

    while (true) {
        inputNumber = prompt('Give me a number');
        inputNumber = parseInt(inputNumber);

        if (isNaN(inputNumber)) {
            alert('Please enter a valid number.');
            continue;
        }

        if (inputNumber <= 0) {
            finalAnswer = 'The square root of a negative number is not defined.';
            break;
        } else {
            const squareRoot = Math.sqrt(inputNumber);
            finalAnswer = `The square root is ${squareRoot}!`;
            break;
        }
    }
} else {
    finalAnswer = 'The square root is not calculated.';
}

document.querySelector('#target').innerHTML = finalAnswer;
