function findMajorityElement(nums) {
  let majority = nums[0];       // Initialize the majority element
  let count = 1;                // Initialize the count of majority element occurrences

  for (let i = 1; i < nums.length; i++) {
    // If count becomes zero, update the majority element
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } 
    // If the current element is the same as the majority element, increment count
    else if (nums[i] === majority) {
      count++;
    } 
    // If the current element is different from the majority element, decrement count
    else {
      count--;
    }
  }

  // Verify if the majority element appears more than n/2 times
  let occurrences = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majority) {
      occurrences++;
    }
  }

  if (occurrences > nums.length / 2) {
    return majority;
  } else {
    return -1;  // No majority element found
  }
}

// Example usage:
const nums = [1, 3, 3, 4, 3, 5, 3, 3]; 
const result = findMajorityElement(nums);
console.log(result);  // Output: 3
