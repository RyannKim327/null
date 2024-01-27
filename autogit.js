function findKthSmallest(arr, k) {
   if (k < 1 || k > arr.length) {
      return null; // k is out of range
   }
   
   // Perform quickselect
   return quickselect(arr, 0, arr.length - 1, k - 1);
}

function quickselect(arr, start, end, k) {
   // Partition the array
   const pivotIndex = partition(arr, start, end);
   
   // Check the pivot position
   if (k === pivotIndex) {
      return arr[pivotIndex]; // kth smallest element found
   } else if (k < pivotIndex) {
      return quickselect(arr, start, pivotIndex - 1, k); // search in the left partition
   } else {
      return quickselect(arr, pivotIndex + 1, end, k); // search in the right partition
   }
}

function partition(arr, start, end) {
   const pivot = arr[end]; // choose the last element as the pivot
   let i = start;
   
   for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
         swap(arr, i, j); // swap elements
         i++;
      }
   }
   
   swap(arr, i, end); // place the pivot in its correct position
   
   return i; // current pivot position
}

function swap(arr, i, j) {
   const temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
const arr = [5, 3, 8, 2, 9, 1];
const k = 3;

const result = findKthSmallest(arr, k);
console.log(result); // Output: 5
