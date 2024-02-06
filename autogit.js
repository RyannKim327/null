function interpolationSearch(arr, target, start = 0) {
  let end = arr.length - 1;

  while (start <= end) {
    const estimatedPos =
      Math.floor(((target - arr[start]) / (arr[end] - arr[start])) * (end - start)) +
      start;

    if (estimatedPos < start || estimatedPos > end) {
      return -1;
    }

    if (arr[estimatedPos] === target) {
      return estimatedPos;
    }

    if (arr[estimatedPos] < target) {
      start = estimatedPos + 1;
    } else {
      end = estimatedPos - 1;
    }
  }

  return -1;
}

// Testing the interpolationSearch function
const arr = [2, 5, 7, 10, 15, 18, 20];
const target = 10;
const index = interpolationSearch(arr, target);
console.log(`Found ${target} at index ${index}`);
