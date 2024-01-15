function findMajorityElement(arr) {
  let candidate = null;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the candidate is the majority element
  count = 0;
  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  }

  return null; // No majority element found
}

// Example usage:
const arr = [2, 4, 5, 2, 2, 3, 2, 2, 6];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 2
