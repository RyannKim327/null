function findMajorityElement(nums) {
  let majority = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } else if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the majority element is indeed the majority
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++;
    }
    if (count > nums.length / 2) {
      return majority;
    }
  }

  return -1; // If there is no majority element
}

// Example usage
const arr = [1, 2, 3, 1, 1, 1, 4, 1, 5];
const majorityElement = findMajorityElement(arr);
console.log(`The majority element is: ${majorityElement}`);
