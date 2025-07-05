function getMaxValue(arr: number[]): number {
  return Math.max(...arr);
}

function getDigit(num: number, position: number): number {
  // Extract the digit at given position (0-based from right)
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function countingSortByDigit(arr: number[], digitPosition: number): number[] {
  const output: number[] = new Array(arr.length).fill(0);
  const count: number[] = new Array(10).fill(0); // Digits 0-9

  // Store count of occurrences in count[]
  for (let i = 0; i < arr.length; i++) {
    const digit = getDigit(arr[i], digitPosition);
    count[digit]++;
  }

  // Change count[i] so that count[i] contains actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = getDigit(arr[i], digitPosition);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

function radixSort(arr: number[]): number[] {
  const maxNumber = getMaxValue(arr);
  const maxDigits = Math.floor(Math.log10(maxNumber)) + 1;

  let sortedArray = [...arr];

  for (let digitPos = 0; digitPos < maxDigits; digitPos++) {
    sortedArray = countingSortByDigit(sortedArray, digitPos);
  }

  return sortedArray;
}

// Example Usage:
const unsorted = [170, 45, 75, 90, 802, 24, 2, 66];
const sorted = radixSort(unsorted);
console.log(sorted); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
