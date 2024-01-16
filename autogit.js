function findMajorityElement(arr) {
  const count = {};
  const halfLength = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    count[element] = (count[element] || 0) + 1;
  }

  for (let element in count) {
    if (count[element] > halfLength) {
      return element;
    }
  }

  return null;
}

// Example usage
const array = [2, 4, 5, 2, 2, 3, 2, 2, 6];
const majorityElement = findMajorityElement(array);

console.log(majorityElement); // Output: 2
