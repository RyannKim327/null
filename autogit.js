function findMajorityElement(array) {
  let candidate = null;
  let count = 0;

  // Step 1: Find the candidate
  for (let num of array) {
    if (count === 0) {
      candidate = num;
    }

    count += candidate === num ? 1 : -1;
  }

  // Step 2: Verify the candidate
  count = 0;
  for (let num of array) {
    if (candidate === num) {
      count++;
    }
  }

  // Step 3: Check if the candidate is a majority element
  if (count > array.length / 2) {
    return candidate;
  } else {
    return "No majority element found";
  }
}

// Example usage
const array = [1, 2, 2, 2, 4, 2, 5];
console.log(findMajorityElement(array)); // Output: 2
