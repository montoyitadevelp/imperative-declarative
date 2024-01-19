//forEach
let arr = [2, 1, 5, 7, 5, 8, 7, 9, 10];

//Imperative
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  let index = i;
  //console.log(`index - ${index}: element - ${element}`);
}

//Declarative
arr.forEach((element, index) => {
  //console.log(`index - ${index}: element - ${element}`);
});
