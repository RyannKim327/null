function findMajorityElement(array) {
  // Step 1: Find a candidate for the majority element
  let candidate = null;
  let count = 0;
  for (let num of array) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Step 2: Verify if the candidate is indeed the majority element
  count = 0;
  for (let num of array) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > array.length / 2) {
    return candidate;
  } else {
    return null; // No majority element found
  }
}

// Example usage:
const array = [1, 2, 2, 2, 3, 2, 4, 2, 5];
const majorityElement = findMajorityElement(array);
console.log('Majority Element:', majorityElement);
