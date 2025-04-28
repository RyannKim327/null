function getMaxDigits(arr: number[]): number {
  // Find the maximum number to know the number of digits
  const max = Math.max(...arr);
  return max.toString().length;
}

function getDigit(num: number, place: number): number {
  // Extract digit at 'place' (1 for units, 10 for tens, etc.)
  return Math.floor(Math.abs(num) / place) % 10;
}

function radixSort(arr: number[]): number[] {
  const maxDigits = getMaxDigits(arr);
  let result = [...arr]; // Make a copy to avoid in-place modification
  let place = 1;

  for (let i = 0; i < maxDigits; i++) {
    // Create buckets for each digit (0-9)
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (const num of result) {
      const digit = getDigit(num, place);
      buckets[digit].push(num);
    }

    // Flatten buckets back into the array
    result = [].concat(...buckets);

    // Move to the next digit place
    place *= 10;
  }

  return result;
}
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // [2, 24, 45, 66, 75, 90, 170, 802]
