function countingSort(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const countingArray = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countingArray[arr[i] - min]++;
  }

  for (let i = 1; i < countingArray.length; i++) {
    countingArray[i] += countingArray[i - 1];
  }

  const output = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    output[countingArray[arr[i] - min] - 1] = arr[i];
    countingArray[arr[i] - min]--;
  }

  return output;
}

// Example usage:
const unsortedArray = [4, 3, 5, 1, 2, 4, 3, 2, 5, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);
