function findKthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
function findKthSmallest(arr, k) {
  // Base case: If the array has only one element, return it.
  if (arr.length === 1) {
    return arr[0];
  }

  // Choose the pivot (last element)
  const pivot = arr[arr.length - 1];

  // Partition elements
  const smaller = arr.filter((element) => element < pivot);
  const equal = arr.filter((element) => element === pivot);
  const greater = arr.filter((element) => element > pivot);

  // Recur on the appropriate part of the array
  if (k <= smaller.length) {
    return findKthSmallest(smaller, k);
  } else if (k <= smaller.length + equal.length) {
    return pivot;
  } else {
    return findKthSmallest(greater, k - (smaller.length + equal.length));
  }
}
