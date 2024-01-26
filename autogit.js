function findMajorityElement(arr) {
  const freqCount = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (freqCount[element]) {
      freqCount[element]++;
    } else {
      freqCount[element] = 1;
    }
  }

  let majorityElement = null;
  let maxFrequency = 0;

  for (const element in freqCount) {
    if (freqCount[element] > maxFrequency) {
      maxFrequency = freqCount[element];
      majorityElement = element;
    }
  }

  if (maxFrequency > arr.length / 2) {
    return majorityElement;
  } else {
    return "No majority element found";
  }
}

// Example usage:
const array = [2, 4, 5, 2, 2, 2, 5, 2, 6];
console.log(findMajorityElement(array)); // Output: 2
