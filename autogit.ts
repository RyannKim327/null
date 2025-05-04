function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements from left or right
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const unsorted = [38, 27, 43, 3, 9, 82, 10];
const sorted = mergeSort(unsorted);
console.log(sorted);  // Output: [3, 9, 10, 27, 38, 43, 82]
