function countingSort(arr) {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }

  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const count = new Array(max + 1).fill(0);
  const output = new Array(len);

  for (let i = 0; i < len; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  for (let i = len - 1; i >= 0; i--) {
    const val = arr[i];
    count[val]--;
    output[count[val]] = val;
  }

  return output;
}
const array = [5, 2, 9, 5, 2, 3, 5];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [2, 2, 3, 5, 5, 5, 9]
