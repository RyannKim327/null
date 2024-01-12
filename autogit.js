function findMajorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  // At this point, the candidate might be the majority element
  // We need to validate it by counting its occurrences

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

// Example usage
const array = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(array)); // Output: 2
