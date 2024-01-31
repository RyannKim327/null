function countingSort(arr) {
  // ...
}
  let maxValue = Math.max(...arr);
  let count = new Array(maxValue + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (let i = 1; i <= maxValue; i++) {
    count[i] += count[i - 1];
  }
  let sortedArr = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  return sortedArr;
function countingSort(arr) {
  let maxValue = Math.max(...arr);
  let count = new Array(maxValue + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i <= maxValue; i++) {
    count[i] += count[i - 1];
  }

  let sortedArr = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sortedArr;
}
let arr = [3, 1, 6, 2, 5, 4];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6]
