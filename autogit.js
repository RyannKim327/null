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
  
  // Verify if the found majority element occurs more than n/2 times
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    }
  }
  if (count > nums.length / 2) {
    return majorityElement;
  }
  
  return null; // No majority element found
}

// Example usage:
const nums = [2, 3, 4, 2, 2, 2, 5];
const majorityElement = findMajorityElement(nums);
console.log("Majority Element:", majorityElement);
