function findMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the candidate is the majority element
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    }
  }

  // Return the majority element if it exists
  if (count > Math.floor(nums.length / 2)) {
    return candidate;
  } else {
    return "No majority element found.";
  }
}

// Example usage
const nums = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 2
