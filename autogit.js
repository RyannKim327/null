function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
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
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  } else {
    return "No majority element found.";
  }
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr)); // Output: 2
