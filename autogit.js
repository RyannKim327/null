function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (maximum value) of the heap with the last element of the heap
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        // Reduce the size of the heap by 1
        heapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n/2); i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, n) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    // Compare the current node with its left child
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Compare the current node with its right child
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not the current node, swap them and heapify the affected sub-tree
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, n);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr)); // Output: [5, 6, 7, 11, 12, 13]
