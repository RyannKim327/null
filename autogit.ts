function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Append any remaining elements
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

function mergeSortIterative(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  // Start with size 1 subarrays and double each iteration
  let width = 1;
  const n = arr.length;
  let temp: number[] = [...arr];

  while (width < n) {
    for (let i = 0; i < n; i += 2 * width) {
      // left and right boundaries of the subarrays to merge
      const leftStart = i;
      const leftEnd = Math.min(i + width, n);
      const rightEnd = Math.min(i + 2 * width, n);

      // Extract subarrays to merge
      const left = temp.slice(leftStart, leftEnd);
      const right = temp.slice(leftEnd, rightEnd);

      // Merge and place back into temp
      const merged = merge(left, right);
      for (let j = 0; j < merged.length; j++) {
        temp[leftStart + j] = merged[j];
      }
    }
    width *= 2;
  }

  return temp;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr)); // [3, 9, 10, 27, 38, 43, 82]
