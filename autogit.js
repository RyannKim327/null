function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

const originalArray = ["apple", "banana", "grape", "banana", "orange", "apple"];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // ["apple", "banana", "grape", "orange"]
function removeDuplicates(arr) {
  return arr.reduce((uniqueArr, value) => {
    if (!uniqueArr.includes(value)) {
      uniqueArr.push(value);
    }
    return uniqueArr;
  }, []);
}

const originalArray = [5, 6, 7, 8, 7, 6, 9];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // [5, 6, 7, 8, 9]
