function removeDuplicates(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

const originalArray = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);
function removeDuplicates(array) {
  return Array.from(new Set(array));
}

const originalArray = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);
function removeDuplicates(array) {
  return array.reduce((unique, element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
    return unique;
  }, []);
}

const originalArray = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);
