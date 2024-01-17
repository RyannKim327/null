function findMajorityElement(nums) {
  // Step 1: Find the potential candidate for majority element
  let candidate;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else {
      count += (candidate === num) ? 1 : -1;
    }
  }

  // Step 2: Verify if the candidate is the majority element
  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  } else {
    return "No majority element found";
  }
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 2
