function findMajorityElement(nums) {
  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    }
  }

  // Verify if the majority element occurs more than n/2 times
  count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    }

    if (count > nums.length / 2) {
      return majorityElement;
    }
  }

  // If there is no majority element
  return null;
}

// Example usage
const nums = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 2
