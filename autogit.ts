function interpolationSearch<T>(arr: T[], target: T, compareFn: (a: T, b: T) => number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && arr[low] !== arr[high]) {
    const mid = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (compareFn(arr[mid], target) === 0) {
      return mid;
    } else if (compareFn(arr[mid], target) < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (arr[low] === target) {
    return low;
  }

  return -1;
}

// Example usage
const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;

const result = interpolationSearch(numbers, target, (a, b) => a - b);
console.log(result); // Output: 5
