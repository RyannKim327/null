const array = ['a', 'b', 'c', 'a', 'b'];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray);
const array = ['a', 'b', 'c', 'a', 'b'];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);

console.log(uniqueArray);
const array = ['a', 'b', 'c', 'a', 'b'];
const uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i]);
  }
}

console.log(uniqueArray);
