function majorityElement(arr) {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    hashMap.set(num, (hashMap.get(num) || 0) + 1);

    if (hashMap.get(num) > arr.length / 2) {
      return num;
    }
  }

  return null;
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
const majority = majorityElement(arr);
console.log(majority); // Output: 2
function majorityElement(arr) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (candidate === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
const majority = majorityElement(arr);
console.log(majority); // Output: 2
