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
  
  // Verify if the majority element occurs more than n/2 times
  let occurrences = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      occurrences++;
    }
  }
  
  if (occurrences > nums.length / 2) {
    return majorityElement;
  } else {
    return "No majority element found";
  }
}

// Example usage:
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(nums)); // Output: 2
