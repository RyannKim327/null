function findMajorityElement(arr) {
  // Step 1: Find the potential candidate for the majority element
  let count = 0;
  let candidate = null;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
    }
    if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Step 2: Verify if the candidate is the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return "No majority element found";
  }
}

// Example usage
const arr = [1, 2, 3, 2, 2];
console.log(findMajorityElement(arr)); // Output: 2
