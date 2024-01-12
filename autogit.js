function findMajorityElement(arr) {
  const freqMap = {};
  const n = arr.length;

  // Populate the frequency map
  for (let i = 0; i < n; i++) {
    const num = arr[i];
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Find the element with the highest frequency
  let majorityElement = null;
  let maxFreq = 0;

  for (const num in freqMap) {
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      majorityElement = num;
    }
  }

  // Check if the majority element exists
  if (maxFreq > n / 2) {
    return majorityElement;
  } else {
    return "No majority element found";
  }
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(arr)); // Output: 2
