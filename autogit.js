function findMajorityElement(array) {
  const frequency = {};

  // Count the frequency of each element
  for (let i = 0; i < array.length; i++) {
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

  // Check if it is a majority element
  if (maxFrequency > array.length / 2) {
    return majorityElement;
  }

  return null;
}

// Example usage
const array = [1, 2, 2, 3, 2, 4, 2];
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 2
