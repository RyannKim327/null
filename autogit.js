// Function to perform interpolation search
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Calculate the position using interpolation formula
    let position = Math.floor(
      low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low])
    );

    // If target is found at position
    if (arr[position] === target) {
      return position;
    }

    // If target is less, ignore the right half
    if (arr[position] > target) {
      high = position - 1;
    } else {
      // If target is greater, ignore the left half
      low = position + 1;
    }
  }

  return -1; // Target not found
}

// Usage example
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

console.log("Array:", array);
console.log("Target:", target);
console.log("Index:", interpolationSearch(array, target));
