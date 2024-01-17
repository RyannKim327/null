function findMajorityElement(arr) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Confirm if the candidate is the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return "No majority element found!";
  }
}

// Example usage:
const array = [2, 4, 5, 4, 4, 2, 4, 2, 4];
const majorityElement = findMajorityElement(array);
console.log(`Majority element: ${majorityElement}`);
