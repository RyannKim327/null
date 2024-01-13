function findMajorityElement(array) {
  const countMap = {};
  const n = array.length;

  // Count the frequency of each element
  for (let i = 0; i < n; i++) {
    const element = array[i];
    countMap[element] = (countMap[element] || 0) + 1;
  }

  // Find the element with the maximum count
  let majorityElement;
  let maxCount = 0;

  for (const key in countMap) {
    if (countMap.hasOwnProperty(key)) {
      const count = countMap[key];
      if (count > maxCount) {
        maxCount = count;
        majorityElement = key;
      }
    }
  }

  // Check if the majority element exists
  if (maxCount > n / 2) {
    return majorityElement;
  } else {
    return "No majority element found";
  }
}

// Example usage
const array = [1, 2, 2, 2, 3, 4, 2];
console.log(findMajorityElement(array)); // Output: 2
