function findMajorityElement(array) {
  const frequency = {};
  const n = array.length;

  // Count the frequencies of each element
  for (let i = 0; i < n; i++) {
    const element = array[i];
    frequency[element] = (frequency[element] || 0) + 1;
  }

  // Find the element with the highest frequency
  let majorityElement;
  let maxFrequency = 0;
  for (const element in frequency) {
    if (frequency[element] > maxFrequency) {
      majorityElement = element;
      maxFrequency = frequency[element];
    }
  }

  // Check if the frequency of the majority element is greater than n/2
  if (maxFrequency > n / 2) {
    return majorityElement;
  } else {
    return "No majority element found.";
  }
}

// Example usage
const array = [2, 2, 3, 4, 2, 2];
console.log(findMajorityElement(array)); // Output: 2
