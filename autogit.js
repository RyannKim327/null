function interpolationSearch(arr, target, startIdx = 0) {
  let left = startIdx;
  let right = arr.length - 1;

  while (left <= right && target >= arr[left] && target <= arr[right]) {
    const mid = Math.floor(left + (target - arr[left]) * (right - left) / (arr[right] - arr[left]));

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

const index = interpolationSearch(arr, target);

if (index !== -1) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found in the array`);
}
