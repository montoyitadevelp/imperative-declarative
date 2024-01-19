//every
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = false;

for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (item % 2 === 0) {
        result = true;
    } else {
        result = false;
        break;
    }

}

arr.every((item) => item % 2 === 0)
