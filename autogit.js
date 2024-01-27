function findMajorityElement(arr) {
  const count = {};
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const element = arr[i];
    count[element] = (count[element] || 0) + 1;
  }

  let majorityElement = null;
  let majorityCount = 0;

  for (const key in count) {
    if (count[key] > majorityCount) {
      majorityCount = count[key];
      majorityElement = key;
    }
  }

  if (majorityCount > n / 2) {
    return majorityElement;
  } else {
    return "No majority element found";
  }
}

// Example usage:
const arr = [2, 2, 3, 2, 4, 2, 5, 6, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 2
