
'use strict';
let num1 = prompt('Give me the first number:')
let num2 = prompt('Give me the second number:')
let num3 = prompt('Give me the third number:')

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = (num1 + num2 + num3)/3;

let results = `Sum: ${sum}` + "<br>" +`Product: ${product}` + "<br>" + `Average: ${average}` ;

document.querySelector('#target').innerHTML = results ;



