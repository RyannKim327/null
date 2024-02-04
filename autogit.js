function findMajorityElement(arr) {
  let candidate, count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  // Verifying if the candidate is the majority element
  count = 0;
  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return "No majority element found";
  }
}

// Example usage
const array = [2, 4, 5, 2, 2, 3, 2, 2, 6];
console.log(findMajorityElement(array)); // Output: 2
