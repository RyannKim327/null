function findMajorityElement(nums) {
  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    } else if (majorityElement === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if majorityElement is the actual majority element
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return majorityElement;
  }

  return null; // No majority element
}

// Example usage:
const array = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 2
