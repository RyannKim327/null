function findMajorityElement(arr) {
  let candidate;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (candidate === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the candidate is actually the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return -1; // No majority element
  }
}

// Example usage
const array = [2, 2, 3, 4, 2, 2, 5];
const majorityElement = findMajorityElement(array);
console.log(majorityElement);
