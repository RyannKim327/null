function findMajorityElement(nums) {
  const frequency = {};
  const majorityThreshold = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]]) {
      frequency[nums[i]]++;
    } else {
      frequency[nums[i]] = 1;
    }

    if (frequency[nums[i]] > majorityThreshold) {
      return nums[i];
    }
  }

  return null; // No majority element found
}

// Example usage:
const arr = [2, 4, 5, 2, 3, 2, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 2
