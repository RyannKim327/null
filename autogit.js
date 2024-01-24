function countingSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  const sortedArray = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArray[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sortedArray;
}

// Example usage:
const arr = [3, 1, 6, 2, 4, 9, 5];
const sortedArr = countingSort(arr);
console.log(sortedArr);
