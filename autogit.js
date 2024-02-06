function findMajorityElement(arr) {
  let candidate;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Check if the candidate is the majority element
  count = 0;
  for (let num of arr) {
    if (num === candidate) count++;
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return "No majority element found";
  }
}

// Example usage
const arr = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement);
