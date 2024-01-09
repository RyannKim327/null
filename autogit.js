// Helper function to perform the heapify operation
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Main function to perform heap sort
function heapSort(arr) {
    const n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move the current root to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Heapify the reduced heap
        heapify(arr, i, 0);
    }
}

// Example usage:
const array = [4, 10, 3, 5, 1];
console.log("Original Array:", array);

heapSort(array);
console.log("Sorted Array:", array);
