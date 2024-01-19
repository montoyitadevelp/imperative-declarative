//map
let arr = ['Alis', 'Gentle', 'Steve', 'Davey'];
let result = [];

//Imperative
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  result.push(item.toUpperCase());
}

//Declarative
arr.map((item) => item.toUpperCase());
