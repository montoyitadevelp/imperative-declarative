//reduce
let arr = [1, 2, 3, 4, 5];

let result = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  result = Math.max(result, item);
}

console.log(arr.reduce((acc, item) => Math.max(acc, item), Number.MIN_VALUE));
