function mergeSort(arr) {
  const len = arr.length;
  let subArraySize = 1;
  
  while (subArraySize < len) {
    let left = 0;
    
    while (left + subArraySize < len) {
      const mid = left + subArraySize - 1;
      const right = Math.min(left + 2 * subArraySize - 1, len - 1);
      
      merge(arr, left, mid, right);
      left = left + 2 * subArraySize;
    }
    
    subArraySize = 2 * subArraySize;
  }
  
  return arr;
}
function merge(arr, left, mid, right) {
  const len1 = mid - left + 1;
  const len2 = right - mid;
  const leftArray = [], rightArray = [];
  
  for (let i = 0; i < len1; i++) {
    leftArray[i] = arr[left + i];
  }
  
  for (let i = 0; i < len2; i++) {
    rightArray[i] = arr[mid + 1 + i];
  }
  
  let i = 0, j = 0, k = left;
  
  while (i < len1 && j < len2) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }
  
  while (i < len1) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }
  
  while (j < len2) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
}
const arr = [5, 2, 9, 1, 7, 6, 3];
console.log(mergeSort(arr)); // Output: [1, 2, 3, 5, 6, 7, 9]
