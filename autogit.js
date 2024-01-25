function findMaxSubarray(arr) {
  let maxSoFar = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}
const array = [1, -2, 3, 10, -4, 7, 2, -5];
const maxSum = findMaxSubarray(array);
console.log(maxSum); // Output: 18
