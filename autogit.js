function findMajorityElement(arr) {
  const map = new Map();
  
  // Count the frequencies of each element
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  
  // Find the element with the highest frequency
  let majorityElement = null;
  let maxFrequency = 0;
  
  for (const [element, frequency] of map.entries()) {
    if (frequency > maxFrequency) {
      majorityElement = element;
      maxFrequency = frequency;
    }
  }
  
  if (maxFrequency > arr.length / 2) {
    return majorityElement;
  } else {
    return "No majority element found.";
  }
}

// Example usage:
const array = [1, 2, 3, 4, 4, 4, 4, 5];
console.log(findMajorityElement(array)); // Output: 4
