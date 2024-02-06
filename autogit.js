function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, heapSize, rootIdx) {
    let largest = rootIdx;
    const left = 2 * rootIdx + 1;
    const right = 2 * rootIdx + 2;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== rootIdx) {
        [arr[rootIdx], arr[largest]] = [arr[largest], arr[rootIdx]];
        heapify(arr, heapSize, largest);
    }
}
function heapSort(arr) {
    const n = arr.length;

    buildMaxHeap(arr);

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}
const array = [4, 10, 3, 5, 1];
console.log('Original Array:', array);
console.log('Sorted Array:', heapSort(array));
Original Array: [4, 10, 3, 5, 1]
Sorted Array: [1, 3, 4, 5, 10]
