//some
let arr = [
  {
    country: 'Arabia Saudita',
    citizens: 1200000,
  },
  {
    country: 'United States',
    citizens: 5900000,
  },
  {
    country: 'United Kingdom',
    citizens: 3700000,
  },
];

let result = false;

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (item.citizens > 0) {
    result = true;
    break;
  }
}

arr.some((item) => item.citizens > 0)
