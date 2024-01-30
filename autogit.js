function findMajorityElement(nums) {
  let count = 0;
  let majorityElement;

  // Step 1: Find the potential majority element
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
    }

    if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  // Step 2: Verify if the potential majority element is actually the majority
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return majorityElement;
  } else {
    return "No majority element found.";
  }
}

// Example usage:
const array = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(array);
console.log("Majority Element:", majorityElement);
