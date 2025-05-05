function mergeSort(arr: number[]): number[] {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves and then merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0; // left array pointer
  let j = 0; // right array pointer

  // Merge elements in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const unsorted = [5, 3, 8, 4, 2, 7, 1, 6];
const sorted = mergeSort(unsorted);
console.log(sorted);  // [1, 2, 3, 4, 5, 6, 7, 8]
