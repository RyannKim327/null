// Function to perform Heap Sort
function heapSort(array) {
  const arrLength = array.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(arrLength / 2) - 1; i >= 0; i--) {
    heapify(array, arrLength, i);
  }

  // Extract elements from the heap one by one
  for (let i = arrLength - 1; i > 0; i--) {
    // Move current root to the end
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    // Heapify the reduced array
    heapify(array, i, 0);
  }

  return array;
}

// To heapify a subtree rooted with node i
function heapify(array, arrLength, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child = 2*i + 1
  const right = 2 * i + 2; // Right child = 2*i + 2

  // If left child is larger than root
  if (left < arrLength && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < arrLength && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    const temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(array, arrLength, largest);
  }
}

// Example usage:
const array = [5, 8, 2, 10, 3, 1];
console.log("Original Array:", array);
console.log("Sorted Array:", heapSort(array));
