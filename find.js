//find
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

let result = {};

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (arr[i].country === 'United States') {
    result = element;
    break;
  }
}

arr.find((item) => item.country === 'United States');
