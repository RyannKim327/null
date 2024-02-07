function findSecondLargest(array) {
  let max = Math.max(array[0], array[1]);
  let secondMax = Math.min(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] > secondMax) {
      secondMax = array[i];
    }
  }
  
  return secondMax;
}

// Usage example:
const array = [3, 6, 8, 2, 9, 1, 5];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
