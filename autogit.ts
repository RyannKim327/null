function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Base case: array of 0 or 1 elements is already sorted
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
  const sorted: number[] = [];
  let i = 0, j = 0;

  // Compare elements from both arrays and push smaller one into sorted
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  // Concatenate remaining elements (if any)
  return sorted.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const arrayToSort = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(arrayToSort);
console.log(sortedArray);
