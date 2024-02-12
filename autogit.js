function countingSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const count = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  const sorted = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    sorted[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return sorted;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr);
