function findMajorityElement(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }

    if (map[arr[i]] > arr.length / 2) {
      return arr[i];
    }
  }

  return null;
}

// Example usage:
const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 2
