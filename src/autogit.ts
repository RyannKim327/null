const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = array.filter((item, index) => 
  array.indexOf(item) === index
);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
