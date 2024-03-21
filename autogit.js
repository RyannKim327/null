function heapify(arr, length, index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, length, largest);
    }
}

function heapSort(arr) {
    const length = arr.length;

    // Build max heap
    for (let i = Math.floor(length / 2); i >= 0; i--) {
        heapify(arr, length, i);
    }

    // Heap sort
    for (let i = length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = heapSort(arr);
console.log(sortedArr);
