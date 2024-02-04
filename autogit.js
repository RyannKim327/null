function findMajorityElement(nums) {
  let majorityElement = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count++;
    } else if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  // Count occurrences of the majority element
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    }
  }

  // Check if the majority element is indeed the majority
  if (count > Math.floor(nums.length / 2)) {
    return majorityElement;
  } else {
    return "No majority element found";
  }
}
const nums = [2, 5, 5, 2, 5];
console.log(findMajorityElement(nums)); // Output: 5

const nums2 = [3, 1, 2, 3, 2, 3, 3];
console.log(findMajorityElement(nums2)); // Output: 3

const nums3 = [1, 2, 3];
console.log(findMajorityElement(nums3)); // Output: No majority element found
