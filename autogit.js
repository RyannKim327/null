function buildMaxHeap(arr) {
    let length = arr.length;
    let start = Math.floor(length / 2) - 1;

    for (let i = start; i >= 0; i--) {
        heapify(arr, length, i);
    }
}
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, n, largest);
    }
}
function heapSort(arr) {
    let length = arr.length;

    buildMaxHeap(arr);

    for (let i = length - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
    return arr;
}
let array = [12, 11, 13, 5, 6, 7];
console.log(heapSort(array)); // Output: [5, 6, 7, 11, 12, 13]
