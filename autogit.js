function findMajorityElement(nums) {
  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    } else if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the majority element is indeed the majority
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return majorityElement;
  } else {
    return -1; // Signifies that there is no majority element
  }
}

// Example usage:
const nums = [2, 3, 2, 2, 4, 2, 5, 2, 6];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 2
