let list = []

for (let i=0; i<5; i++){
  let num = prompt('Please enter 5 numbers of your own choice and I will return them in reverse order: ')


  num = parseInt(num)

  list.push(num);
  console.log('Number added to the list: ', num)
}

list.sort((a, b) => a - b);

let reversedList = [];

for (let i = list.length - 1; i >= 0; i--) {
  reversedList.push(list[i]);
}


console.log('Reverser array: ', reversedList);