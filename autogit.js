function findMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  // Step 1: Find potential candidate
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  // Step 2: Check if the candidate is the majority element
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    }
  }

  // Step 3: Return the majority element if it exists
  if (count > (nums.length / 2)) {
    return candidate;
  } else {
    return null; // No majority element
  }
}

// Example usage:
const nums = [1, 2, 2, 3, 2, 4, 2];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 2
