function mergeSortIterative(arr: number[]): number[] {
  const n = arr.length;
  let width = 1;
  const temp: number[] = new Array(n);
  
  while (width < n) {
    for (let i = 0; i < n; i += 2 * width) {
      const left = i;
      const mid = Math.min(i + width, n);
      const right = Math.min(i + 2 * width, n);
      
      // Merge the two subarrays arr[left..mid-1] and arr[mid..right-1]
      let l = left;
      let r = mid;
      let k = left;
      
      while (l < mid && r < right) {
        if (arr[l] <= arr[r]) {
          temp[k++] = arr[l++];
        } else {
          temp[k++] = arr[r++];
        }
      }
      
      // Copy remaining elements from left subarray (if any)
      while (l < mid) {
        temp[k++] = arr[l++];
      }
      
      // Copy remaining elements from right subarray (if any)
      while (r < right) {
        temp[k++] = arr[r++];
      }
      
      // Copy merged elements back into original array
      for (let j = left; j < right; j++) {
        arr[j] = temp[j];
      }
    }
    width *= 2;
  }
  
  return arr;
}

// Example usage:
console.log(mergeSortIterative([5, 3, 8, 4, 2, 7, 1, 6]));
