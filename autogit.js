function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

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

// Example usage
const array = [5, 8, 2, 10, 3];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
