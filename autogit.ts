function radixSort(arr: number[]): number[] {
  // Find the maximum number to know the number of digits
  const maxNum = Math.max(...arr);
  
  let digitPlace = 1;

  // Helper function to get digit at a specific place
  const getDigit = (num: number, place: number) => {
    return Math.floor((num / place) % 10);
  };

  while (digitPlace <= maxNum) {
    // Create buckets for each digit (0 to 9)
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    // Place each number in the corresponding bucket based on current digit
    for (const num of arr) {
      const digit = getDigit(num, digitPlace);
      buckets[digit].push(num);
    }

    // Flatten buckets into arr
    arr = [].concat(...buckets);

    // Move to next digit place (ones, tens, hundreds, ...)
    digitPlace *= 10;
  }

  return arr;
}

// Example usage:
const unsortedArr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(unsortedArr);
console.log(sortedArr);
