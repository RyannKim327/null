function mergeSortIterative(arr) {
  // Create an array of subarrays with each element in arr
  let subarrays = arr.map((el) => [el]);

  // Merge and sort each adjacent pair of subarrays until only one subarray remains
  while (subarrays.length > 1) {
    let mergedArray = [];

    for (let i = 0; i < subarrays.length; i += 2) {
      let mergedSubarray = merge(subarrays[i], subarrays[i + 1]);
      mergedArray.push(mergedSubarray);
    }

    subarrays = mergedArray;
  }

  return subarrays[0];
}

// Helper function to merge two sorted arrays
function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Copy the remaining elements from arr1 or arr2 (if any)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Usage
const arr = [5, 2, 8, 3, 1, 6, 9, 4, 7];
console.log(mergeSortIterative(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
