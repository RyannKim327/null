function getMax(arr: number[]): number {
  return Math.max(...arr);
}

// Helper function to do counting sort based on digit represented by exp
function countingSort(arr: number[], exp: number): number[] {
  const output: number[] = new Array(arr.length).fill(0);
  const count: number[] = new Array(10).fill(0); // digit range 0-9

  // Store count of occurrences for each digit
  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor((arr[i] / exp) % 10);
    count[digit]++;
  }

  // Change count[i] so that count[i] contains position of this digit in output
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor((arr[i] / exp) % 10);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

function radixSort(arr: number[]): number[] {
  const max = getMax(arr);
  let sortedArr = [...arr];

  // Do counting sort for every digit, starting from least significant digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    sortedArr = countingSort(sortedArr, exp);
  }

  return sortedArr;
}

// Example
const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(array));
