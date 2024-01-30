function findKthSmallest(array, k) {
  if (array.length < k) return null;
  
  // Shuffle the array to improve Quickselect's performance
  shuffle(array);

  return quickselect(array, 0, array.length - 1, k - 1);
}

function quickselect(array, left, right, k) {
  while (left <= right) {
    let pivotIndex = partition(array, left, right);
    if (pivotIndex === k) {
      return array[pivotIndex];
    } else if (pivotIndex < k) {
      left = pivotIndex + 1;
    } else {
      right = pivotIndex - 1;
    }
  }
  
  return null;
}

function partition(array, left, right) {
  let pivotIndex = Math.floor((left + right) / 2);
  let pivotValue = array[pivotIndex];
  
  swap(array, pivotIndex, right);
  
  let i = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotValue) {
      swap(array, i, j);
      i++;
    }
  }
  
  swap(array, i, right);
  
  return i;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    swap(array, i, j);
  }
}
let arr = [6, 9, 2, 5, 1, 8];
let k = 3;

let kthSmallest = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
