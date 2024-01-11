function findSecondLargest(array) {
  let max = array[0];
  let secondMax = Number.MIN_SAFE_INTEGER;
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] > secondMax) {
      secondMax = array[i];
    }
  }
  
  return secondMax;
}

// Example usage
const array = [5, 3, 9, 1, 7];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 7
