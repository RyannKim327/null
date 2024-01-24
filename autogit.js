function countingSort(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const countArray = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  const sortedArray = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArray[countArray[arr[i] - min] - 1] = arr[i];
    countArray[arr[i] - min]--;
  }

  return sortedArray;
}
const array = [5, 3, 2, 6, 1, 4];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]
