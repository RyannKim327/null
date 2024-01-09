function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // Concatenate the remaining elements of left and right arrays (if any)
  return sortedArr.concat(left.slice().concat(right.slice()));
}

// Test the mergeSort function
let arr = [5, 4, 3, 2, 1];
let sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5]
