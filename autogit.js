function findMaxSubarray(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}
const arr = [1, -3, 2, 1, -1];
const maxSum = findMaxSubarray(arr);
console.log(maxSum); // Output: 3
