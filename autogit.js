function findMajorityElement(arr) {
  let count = 0;
  let majorityElement = null;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      majorityElement = arr[i];
      count = 1;
    } else {
      if (arr[i] === majorityElement) {
        count++;
      } else {
        count--;
      }
    }
  }

  // Check if the majority element is indeed a majority
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majorityElement) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return majorityElement;
  } else {
    return null; // No majority element found
  }
}

// Example usage:
const array = [2, 4, 4, 2, 4, 4, 4];
const majorityElement = findMajorityElement(array);
console.log(majorityElement);  // Output: 4
