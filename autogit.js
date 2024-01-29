function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root with the last element

        heapify(arr, i, 0); // Heapify reduced heap
    }
    return arr;
}

// Example usage:
const array = [9, 4, 7, 2, 1, 8, 6, 5, 3];
console.log(heapSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
