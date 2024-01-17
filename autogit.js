function removeDuplicates(array) {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

// Example usage:
var array = [1, 2, 3, 4, 4, 5, 6, 6];
var uniqueArray = removeDuplicates(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
