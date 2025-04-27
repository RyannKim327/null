function getMaxValue(arr: number[]): number {
  return Math.max(...arr);
}

function getDigit(num: number, digitIndex: number): number {
  // Extract the digit at digitIndex (0 = least significant digit)
  return Math.floor(Math.abs(num) / Math.pow(10, digitIndex)) % 10;
}

function countingSortByDigit(arr: number[], digitIndex: number): number[] {
  const buckets: number[][] = Array.from({ length: 10 }, () => []);

  for (const num of arr) {
    const digit = getDigit(num, digitIndex);
    buckets[digit].push(num);
  }

  // Concatenate all buckets into one array, maintaining stability
  return buckets.flat();
}

function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  const maxVal = getMaxValue(arr);
  const maxDigits = Math.floor(Math.log10(maxVal)) + 1;

  let result = [...arr];

  for (let digitIndex = 0; digitIndex < maxDigits; digitIndex++) {
    result = countingSortByDigit(result, digitIndex);
  }

  return result;
}
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers)); // [2, 24, 45, 66, 75, 90, 170, 802]
