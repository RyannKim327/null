function findMajorityElement(arr) {
  let candidate = null;
  let count = 0;

  // Boyer–Moore Majority Vote Algorithm
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

  // Verify if the candidate is the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return "No majority element found.";
  }
}

// Example usage
const array = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 2
