function getMax(arr: number[]): number {
  return Math.max(...arr);
}

function getDigit(num: number, digitPlace: number): number {
  // Extract the digit at 'digitPlace'
  return Math.floor(Math.abs(num) / Math.pow(10, digitPlace)) % 10;
}

function countSortByDigit(arr: number[], digitPlace: number): number[] {
  const buckets: number[][] = Array.from({ length: 10 }, () => []);
  
  for (const num of arr) {
    const digit = getDigit(num, digitPlace);
    buckets[digit].push(num);
  }
  
  // Flatten the buckets back into the array
  return buckets.flat();
}

function radixSort(arr: number[]): number[] {
  const maxNum = getMax(arr);
  const maxDigits = Math.floor(Math.log10(maxNum)) + 1;
  let sortedArray = [...arr];

  for (let digitPlace = 0; digitPlace < maxDigits; digitPlace++) {
    sortedArray = countSortByDigit(sortedArray, digitPlace);
  }

  return sortedArray;
}

// Example Usage:
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers);  // Output: [ 2, 24, 45, 66, 75, 90, 170, 802 ]
