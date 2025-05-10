function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  // Find the maximum number to know the number of digits
  const maxNum = Math.max(...arr);

  let exp = 1; // 10^i where i is the current digit index
  let output = [...arr];

  while (Math.floor(maxNum / exp) > 0) {
    // Create buckets for each digit (0 to 9)
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    // Place elements into buckets based on current digit
    for (const num of output) {
      const digit = Math.floor((num / exp) % 10);
      buckets[digit].push(num);
    }

    // Flatten the buckets back into the output array
    output = ([] as number[]).concat(...buckets);

    exp *= 10; // Move to next digit
  }

  return output;
}

// Example usage:
const nums = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(nums)); // [2, 24, 45, 66, 75, 90, 170, 802]
