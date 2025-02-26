function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// To maintain the heap property
function heapify(arr: number[], n: number, i: number): void {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Example usage:
const myArray = [12, 11, 13, 5, 6, 7];
const sortedArray = heapSort(myArray);
console.log("Sorted array:", sortedArray);
