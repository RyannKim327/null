function findMajorityElement(arr) {
  let count = 0;
  let candidate;

  // Step 1: Finding a candidate for majority element
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (candidate === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  // Step 2: Checking if the candidate is a majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate; // majority element found
  } else {
    throw new Error('No majority element found');
  }
}

// Example usage:
const arr = [3, 1, 3, 3, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 3
