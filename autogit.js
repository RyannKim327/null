function findMajorityElement(arr) {
  const freqMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    freqMap.set(current, (freqMap.get(current) || 0) + 1);
  }
  let majorityElement;
  let maxFrequency = 0;
  for (const [element, frequency] of freqMap) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      majorityElement = element;
    }
  }
  return majorityElement;
}

const arr = [1, 2, 3, 4, 4, 4, 4, 4, 5];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 4
function findMajorityElement(arr) {
  let candidate;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

const arr = [1, 2, 3, 4, 4, 4, 4, 4, 5];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 4
