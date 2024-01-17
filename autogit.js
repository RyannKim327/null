function findMajorityElement(arr) {
  const freqMap = {};

  // Count the frequency of each element
  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Find the element with frequency greater than half the array length
  for (let num in freqMap) {
    if (freqMap[num] > arr.length / 2) {
      return parseInt(num);
    }
  }

  return -1; // If no majority element is found
}

// Example usage:
const arr = [2, 4, 2, 3, 2, 2, 6];
const majorityElement = findMajorityElement(arr);
console.log(`The majority element is: ${majorityElement}`);
