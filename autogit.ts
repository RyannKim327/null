const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = originalArray.filter(item => item !== elementToRemove);
console.log(newArray); // [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const index = array.indexOf(3);

if (index !== -1) {
  array.splice(index, 1);
}
console.log(array); // [1, 2, 4, 5]
const array = [1, 2, 3, 3, 4, 5];
const result = array.filter(item => item !== 3);
console.log(result); // [1, 2, 4, 5]
const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
const idToRemove = 2;

const filteredArray = array.filter(item => item.id !== idToRemove);
console.log(filteredArray); // [{ id: 1 }, { id: 3 }]
