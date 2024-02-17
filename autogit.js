function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

// Example usage
const arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrWithoutDuplicates = removeDuplicates(arrWithDuplicates);

console.log(arrWithoutDuplicates); // Output: [1, 2, 3, 4, 5]
