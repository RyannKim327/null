// Heapify the array
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Perform Heap Sort
function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root (max element) with the last element
        heapify(arr, i, 0); // Heapify reduced heap
    }

    return arr;
}

// Test the Heap Sort algorithm
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array: " + arr);
console.log("Sorted array: " + heapSort(arr));
