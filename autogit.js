function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log(isSortedAscending(myArray));  // true

const anotherArray = [5, 3, 2, 1, 4];
console.log(isSortedAscending(anotherArray));  // false
