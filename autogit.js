function findMajorityElement(arr) {
  const hashMap = new Map();

  // Count the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (hashMap.has(element)) {
      hashMap.set(element, hashMap.get(element) + 1);
    } else {
      hashMap.set(element, 1);
    }
  }

  // Find the element with maximum frequency
  let majorityElement, maxFrequency = 0;
  hashMap.forEach((frequency, element) => {
    if (frequency > maxFrequency) {
      majorityElement = element;
      maxFrequency = frequency;
    }
  });

  // Check if the maximum frequency is a majority
  if (maxFrequency > arr.length / 2) {
    return majorityElement;
  } else {
    return null; // No majority element
  }
}

// Example usage
const nums = [1, 2, 2, 3, 2, 3, 2];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement);  // Output: 2
