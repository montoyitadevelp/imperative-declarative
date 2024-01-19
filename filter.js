//filter
let arr = [2, 1, 5, 7, 5, 8, 7, 9, 10];
let result = [];

//Imperative
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (element >= 5 && element <= 8) {
    result.push(element);
  }
}

//Declarative
arr.filter((element) => element >= 5 && element <= 8);
