function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Step 1: Build a max-heap from the input array
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements one by one from the heap
    for (let i = n - 1; i > 0; i--) {
        // Swap the root (maximum element) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Helper function to maintain the max-heap property
function heapify(arr: number[], n: number, i: number): void {
    let largest = i; // Initialize largest as the root
    const left = 2 * i + 1; // Left child index
    const right = 2 * i + 2; // Right child index

    // If the left child exists and is greater than the root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If the right child exists and is greater than the current largest
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If the largest element is not the root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
const array = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", array);

const sortedArray = heapSort(array);
console.log("Sorted Array:", sortedArray);
Original Array: [12, 11, 13, 5, 6, 7]
Sorted Array: [5, 6, 7, 11, 12, 13]
