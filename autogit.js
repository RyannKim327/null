const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

const arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrWithoutDuplicates = removeDuplicates(arrWithDuplicates);

console.log(arrWithoutDuplicates); // Output: [1, 2, 3, 4, 5]
