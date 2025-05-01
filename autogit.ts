function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]]; // swap

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr: number[], n: number, i: number) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2

    // If left child exists and is greater than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child exists and is greater than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = heapSort(arr);
console.log("Sorted array is", sortedArr);
