function findMajorityElement(nums) {
  let majority = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majority = num;
      count++;
    } else if (num === majority) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the majority element is indeed the majority
  count = 0;
  for (let num of nums) {
    if (num === majority) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return majority;
  } else {
    return null; // No majority element found
  }
}

// Example Usage
const nums = [1, 3, 3, 3, 2, 2, 3, 3, 4, 4, 4, 4, 4];
const majorityElement = findMajorityElement(nums);

console.log(`The majority element is: ${majorityElement}`);
