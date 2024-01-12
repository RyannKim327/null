function findMajorityElement(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    freq[element] = (freq[element] || 0) + 1;
  }

  let majorityElement = null;
  let majorityCount = 0;

  for (const element in freq) {
    if (freq[element] > majorityCount) {
      majorityCount = freq[element];
      majorityElement = element;
    }
  }

  if (majorityCount > arr.length / 2) {
    return majorityElement;
  } else {
    return null;
  }
}

// Example usage
const array = [1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 2];
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 2
