const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(originalArray);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(originalArray)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const removeDuplicates = (arr) => {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
};

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(originalArray);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
