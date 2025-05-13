function mergeSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return array; // Base case: arrays with 0 or 1 element are already sorted
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));  // Sort left half recursively
  const right = mergeSort(array.slice(mid));    // Sort right half recursively

  return merge(left, right); // Merge the sorted halves
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  // We assume T can be compared with < operator; for full safety, you'd want to pass a comparator
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left or right
  return result.concat(left.slice(i)).concat(right.slice(j));
}
const numbers = [5, 3, 8, 4, 2];
const sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers); // [2, 3, 4, 5, 8]
