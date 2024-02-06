// Merge sort function
function mergeSort(array) {
  if (array.length <= 1) return array;

  // Create an array of sorted sub-arrays
  var subArrays = array.map(function (element) {
    return [element];
  });

  // Merge sub-arrays pairwise until we have a sorted array
  while (subArrays.length > 1) {
    var temp = [];

    for (var i = 0; i < subArrays.length; i += 2) {
      // Merge sub-arrays at index i and i+1
      if (i + 1 === subArrays.length) {
        temp.push(subArrays[i]);
      } else {
        temp.push(merge(subArrays[i], subArrays[i + 1]));
      }
    }

    // Replace subArrays with the merged sub-arrays
    subArrays = temp;
  }

  // Return the sorted array
  return subArrays[0];
}

// Merge function to merge two sorted arrays
function merge(left, right) {
  var merged = [];
  var leftIndex = 0;
  var rightIndex = 0;

  // Merge elements from left and right into the merged array in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Append any remaining elements from left and right
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}

// Example usage
var array = [9, 4, 8, 2, 1, 5, 3, 7, 6];
console.log("Original array: " + array);

var sortedArray = mergeSort(array);
console.log("Sorted array: " + sortedArray);
