// Heapify function to create a max heap
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

// Heap sort function
function heapSort(arr) {
    const n = arr.length;

    // Build Max Heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Heap sort
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root and last element
        heapify(arr, i, 0); // Heapify reduced heap
    }

    return arr;
}

// Usage example
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log("Original array:", arr);
const sortedArr = heapSort(arr);
console.log("Sorted array:", sortedArr);
