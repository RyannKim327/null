function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return result.concat(left).concat(right);
}

// Example usage:
const arr = [5, 2, 8, 3, 1, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 8]
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const middle = arr.length / 2;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return [...mergeSort(left), ...mergeSort(right)].sort((a, b) => a - b);
}
