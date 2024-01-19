//sort

let arr = [2, 1, 5, 7, 5, 8, 7, 9, 10];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

let arr2 = [...arr];
arr2.sort((a, b) => {
  if (a < j) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});
