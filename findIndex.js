//findIndex
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

let result = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].country === 'United States') {
    result = i;
    break;
  }
}

arr.findIndex((item) => item.country === 'United States')
