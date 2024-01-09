function findMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += (num === candidate) ? 1 : -1;
  }

  // Verifying if the candidate is the majority element
  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > Math.floor(nums.length / 2)) {
    return candidate;
  }

  return null; // No majority element found
}

// Example usage
const nums = [1, 3, 3, 1, 3, 4, 2, 2, 2];
const majorityElement = findMajorityElement(nums);

if (majorityElement !== null) {
  console.log(`The majority element is ${majorityElement}`);
} else {
  console.log("No majority element found");
}
