function getMax(arr: number[]): number {
  return Math.max(...arr);
}

function countingSortByDigit(arr: number[], digitPlace: number): number[] {
  const buckets: number[][] = Array.from({ length: 10 }, () => []);
  
  // Distribute elements into buckets based on current digit
  for (const num of arr) {
    const digit = Math.floor((num / digitPlace) % 10);
    buckets[digit].push(num);
  }

  // Collect numbers from buckets
  return [].concat(...buckets);
}

function radixSort(arr: number[]): number[] {
  const maxNumber = getMax(arr);
  let digitPlace = 1;

  while (Math.floor(maxNumber / digitPlace) > 0) {
    arr = countingSortByDigit(arr, digitPlace);
    digitPlace *= 10;
  }

  return arr;
}

// Example:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // [2, 24, 45, 66, 75, 90, 170, 802]
