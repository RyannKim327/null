function findMajorityElement(nums) {
  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majorityElement = nums[i];
        count = 1;
      }
    }
  }

  // Verify if majorityElement is the majority element
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    }
  }

  if (count > Math.floor(nums.length / 2)) {
    return majorityElement;
  } else {
    return "No majority element found.";
  }
}

// Example usage:
const nums = [1, 2, 2, 2, 3];
console.log(findMajorityElement(nums)); // Output: 2
