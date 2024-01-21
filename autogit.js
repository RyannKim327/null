function radixSort(arr) {
  const max = Math.max(...arr);
  const maxDigitCount = String(max).length;

  for (let k = 0; k < maxDigitCount; k++) {
    arr = countingSort(arr, k);
  }

  return arr;
}

function countingSort(arr, position) {
  const count = Array(10).fill(0);
  const output = Array(arr.length);

  for (let num of arr) {
    const countIndex = Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
    count[countIndex]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const countIndex = Math.floor(Math.abs(arr[i]) / Math.pow(10, position)) % 10;
    output[count[countIndex] - 1] = arr[i];
    count[countIndex]--;
  }

  return output;
}

// Example usage
const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(array)); // [2, 24, 45, 66, 75, 90, 170, 802]
