function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into subarrays
  let temp = arr.map(function (value) {
    return [value];
  });

  // Merge the subarrays
  while (temp.length > 1) {
    let merged = [];

    for (let i = 0; i < temp.length; i += 2) {
      // Merge two subarrays
      if (temp[i + 1]) {
        merged.push(merge(temp[i], temp[i + 1]));
      } else {
        merged.push(temp[i]);
      }
    }

    temp = merged;
  }

  return temp[0]; // Return the sorted array
}

// Helper function to merge two sorted arrays
function merge(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Push the remaining elements of arr1, if any
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Push the remaining elements of arr2, if any
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example usage:
let array = [5, 3, 8, 4, 2, 1, 6, 7];
let sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
