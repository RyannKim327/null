function findMajorityElement(array) {
  let majorityElement = array[0];
  let count = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === majorityElement) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majorityElement = array[i];
        count = 1;
      }
    }
  }

  // Verify if majorityElement is indeed the majority element
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === majorityElement) {
      count++;
    }
  }

  if (count > array.length / 2) {
    return majorityElement;
  }

  // Return null if there is no majority element
  return null;
}

// Example usage:
const array = [3, 2, 3];
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 3
