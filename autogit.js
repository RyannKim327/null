function findMaxSubarray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSum + arr[i]) {
      tempStart = i;
      currentSum = arr[i];
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return arr.slice(start, end + 1);
}
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarray = findMaxSubarray(array);
console.log(maxSubarray); // [4, -1, 2, 1]
