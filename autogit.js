function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];

    if (currentElement > largest) {
      secondLargest = largest;
      largest = currentElement;
    } else if (currentElement < largest && currentElement > secondLargest) {
      secondLargest = currentElement;
    }
  }

  return secondLargest;
}

// Example usage:
const arr = [5, 10, 2, 8, 15];
console.log(findSecondLargest(arr)); // Output: 10
