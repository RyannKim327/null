function getMaxValue(arr: number[]): number {
  return Math.max(...arr);
}

function getDigit(num: number, digitIndex: number): number {
  // Get the digit at digitIndex (0 for units, 1 for tens, etc.)
  return Math.floor(Math.abs(num) / Math.pow(10, digitIndex)) % 10;
}

function radixSort(arr: number[]): number[] {
  const maxVal = getMaxValue(arr);
  const maxDigits = Math.floor(Math.log10(maxVal)) + 1;

  let sortedArray = [...arr];

  for (let digitIndex = 0; digitIndex < maxDigits; digitIndex++) {
    // Buckets for each digit (0-9)
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (const num of sortedArray) {
      const digit = getDigit(num, digitIndex);
      buckets[digit].push(num);
    }

    // Flatten the buckets back into the array
    sortedArray = [].concat(...buckets);
  }

  return sortedArray;
}

// Example:
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers));
// Output: [2, 24, 45, 66, 75, 90, 170, 802]
