function findMajorityElement(arr) {
  let majorityElement = null;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      majorityElement = arr[i];
      count++;
    } else if (majorityElement === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the majority element is actually the majority
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majorityElement) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return majorityElement;
  } else {
    return null; // No majority element found
  }
}

// Example usage
const array = [1, 2, 3, 2, 2]; // Majority element: 2
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 2
