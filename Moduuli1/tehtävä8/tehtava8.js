'use strict';

// Prompt the user to enter the start and end years
let startYear = prompt('Please enter the Start Year!');
let endYear = prompt('Please enter the End Year!');

// Parse input to integers
startYear = parseInt(startYear);
endYear = parseInt(endYear);

const leapYearsList = document.getElementById('leapYearsList');

for (let i = startYear; i <= endYear; i += 4) {
  if ((i % 100 === 0 && i % 400 === 0) || (i % 4 === 0 && i % 100 !== 0)) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    leapYearsList.appendChild(listItem);
  }
}
