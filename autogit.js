function findSecondLargest(array) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[i];
    } else if (array[i] > secondLargest && array[i] !== firstLargest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

// Example usage:
const array = [5, 10, 2, 8, 9];
const secondLargestElement = findSecondLargest(array);
console.log(secondLargestElement); // Output: 9
