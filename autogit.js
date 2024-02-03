function mergeSortIterative(arr) {
  const n = arr.length;
  let subarraySize = 1;
  let temp = [];

  while (subarraySize < n) {
    let i = 0;

    while (i < n) {
      const leftStart = i;
      const mid = Math.min(i + subarraySize - 1, n - 1);
      i = Math.min(i + subarraySize * 2, n - 1);
      const rightStart = i;
      const end = Math.min(i + subarraySize - 1, n - 1);

      merge(arr, leftStart, mid, rightStart, end, temp);
      i = end + 1;
    }

    subarraySize *= 2;
    arr = [...temp];
  }

  return arr;
}

function merge(arr, leftStart, mid, rightStart, end, temp) {
  let left = leftStart,
    right = rightStart,
    k = leftStart;

  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      temp[k] = arr[left];
      left++;
    } else {
      temp[k] = arr[right];
      right++;
    }
    k++;
  }

  while (left <= mid) {
    temp[k] = arr[left];
    left++;
    k++;
  }

  while (right <= end) {
    temp[k] = arr[right];
    right++;
    k++;
  }
}
const arr = [4, 8, 2, 1, 6, 7, 3, 5];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
