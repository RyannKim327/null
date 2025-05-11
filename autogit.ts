function mergeSort(arr: number[]): number[] {
  // If the array has 0 or 1 element, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array roughly in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the two sorted halves into one sorted array
  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  // Loop through both arrays and insert the smaller element into result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements (one of these will be empty)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const myArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(myArray);
console.log(sortedArray); // [3, 9, 10, 27, 38, 43, 82]
