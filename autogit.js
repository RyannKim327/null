function findMajorityElement(arr) {
  let candidate = null;
  let count = 0;
  
  // Find the potential candidate for the majority element
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else {
      if (arr[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }
  
  // Check if the candidate is the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }
  
  if (count > arr.length / 2) {
    return candidate;
  }
  
  return "No majority element found";
}

// Example usage
const array = [3, 4, 2, 4, 4, 2, 4, 4];
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 4
