let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = array.reduce((acc, current) => {
  if (acc.indexOf(current) === -1) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
