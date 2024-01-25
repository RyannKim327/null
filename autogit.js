function findSecondLargest(array) {
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] !== largest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

// Usage example
const array = [4, 9, 2, 6, 7, 8, 5];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
