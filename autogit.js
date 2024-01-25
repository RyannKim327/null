function findMajorityElement(arr) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count++;
    } else {
      if (candidate === arr[i]) {
        count++;
      } else {
        count--;
      }
    }
  }

  count = 0; // Reset count to re-verify the majority element

  // Verify if candidate is the majority element
  for (let i = 0; i < arr.length; i++) {
    if (candidate === arr[i]) {
      count++;
    }
  }

  // Return the majority element if count is more than n/2
  if (count > arr.length / 2) {
    return candidate;
  }

  return "No majority element found";
}

// Example usage:
const arr = [3, 1, 3, 3, 2];
console.log(findMajorityElement(arr)); // Output: 3
