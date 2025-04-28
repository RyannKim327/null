function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Helper function to heapify a subtree rooted at index i
    function heapify(size: number, i: number): void {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        // If left child exists and is greater than root
        if (left < size && arr[left] > arr[largest]) {
            largest = left;
        }

        // If right child exists and is greater than current largest
        if (right < size && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(size, largest);
        }
    }

    // 1. Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    // 2. Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Call max heapify on the reduced heap
        heapify(i, 0);
    }

    return arr;
}

// Example usage:
const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // Output: [1, 3, 4, 5, 10]
