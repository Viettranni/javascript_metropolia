'use strict';

const element = document.querySelector('#target')

const dogs = []

for ( let i = 1; i <= 6; i++) {
    const dog = prompt(`Give names for 6 dogs. Dog ${i}: `)
    dogs.push(dog)
}


dogs.sort(function(a, b) {
  return b.localeCompare(a);
});

let namesString = '';
for (let i = 0; i < 6; i++) {
  namesString += `<li>${dogs[i]}</li>`;
}

element.innerHTML = namesString