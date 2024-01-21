function findMajorityElement(arr) {
  let majorityIndex = 0;
  let count = 1;

  // Find a candidate for majority element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[majorityIndex]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      majorityIndex = i;
      count = 1;
    }
  }

  const majorityElement = arr[majorityIndex];
  count = 0;

  // Verify if the candidate is a majority element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majorityElement) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return majorityElement;
  } else {
    return undefined; // No majority element found
  }
}

// Example usage:
const array = [3, 1, 3, 3, 2];
console.log(findMajorityElement(array)); // Output: 3
