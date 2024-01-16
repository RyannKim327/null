function findMajorityElement(arr) {
  const freqMap = new Map();
  const targetFreq = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    freqMap.set(element, (freqMap.get(element) || 0) + 1);
    
    if (freqMap.get(element) > targetFreq) {
      return element;
    }
  }

  return "No majority element found.";
}

// Example usage:
const arr = [2, 4, 3, 2, 2, 1, 2, 2, 2];
const majorityElement = findMajorityElement(arr);
console.log("Majority element:", majorityElement);
