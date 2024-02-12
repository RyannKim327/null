function findMaxSubarray(array) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < array.length; i++) {
    maxEndingHere = maxEndingHere + array[i];

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
      end = i;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
      start = i + 1;
    }
  }

  const maxSubarray = array.slice(start, end + 1);
  return { maxSum: maxSoFar, subarray: maxSubarray };
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = findMaxSubarray(array);
console.log(result.maxSum); // Output: 6
console.log(result.subarray); // Output: [4, -1, 2, 1]
