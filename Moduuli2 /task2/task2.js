/*
1. Write a program that asks the user for the number of participants.
2. After this, the program asks for the names of all participants.
3. Finally, the program prints the names of the participants on the web page
in an ordered list (<ol>) in alphabetical order. (2p)*/

'use strict';

const element = document.querySelector('#target')

// Storing participants in the list to order by name later
const list = []

let participantsAmount = parseInt(prompt('Enter the amount of participants: '))

// Prompt questions
for (let i = 1; i <= participantsAmount; i++) {
  const name = prompt(`Enter the name of participant: ${i}`)
  list.push(name)
}

// Put them in a reversed alphabetical order
dogs.sort(function(a, b) {
  return b.localeCompare(a);
});

let namesString = '';
for (let i = 0; i < participantsAmount; i++) {
  namesString += `<li>${list[i]}</li>`;
}

element.innerHTML = namesString;