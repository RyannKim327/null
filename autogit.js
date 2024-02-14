function findMajorityElement(arr) {
  let majorityElement = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === majorityElement) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majorityElement = arr[i];
        count = 1;
      }
    }
  }

  // Verify if the majority element is indeed the majority
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
const arr = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(arr);

if (majorityElement !== null) {
  console.log("Majority element:", majorityElement);
} else {
  console.log("No majority element found");
}
