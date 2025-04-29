function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Base case: already sorted
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0; // pointer for left
  let j = 0; // pointer for right

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements, if any
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(arrayToSort);
console.log(sortedArray); // [3, 9, 10, 27, 38, 43, 82]
