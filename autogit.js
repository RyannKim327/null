function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

const array = [5, 8, 2, 7, 1, 6, 9];
const k = 3;
const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 3
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function minHeapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < heapSize && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < heapSize && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        swap(arr, i, smallest);
        minHeapify(arr, smallest, heapSize);
    }
}

function buildMinHeap(arr) {
    const n = arr.length;
    const startIndex = Math.floor(n / 2) - 1;

    for (let i = startIndex; i >= 0; i--) {
        minHeapify(arr, i, n);
    }
}

function findKthSmallest(arr, k) {
    buildMinHeap(arr);
    let heapSize = arr.length;

    for (let i = 0; i < k - 1; i++) {
        swap(arr, 0, heapSize - 1);
        heapSize--;
        minHeapify(arr, 0, heapSize);
    }

    return arr[0];
}

const array = [5, 8, 2, 7, 1, 6, 9];
const k = 3;
const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 3
function partition(arr, left, right) {
    const pivotValue = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivotValue) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

function quickselect(arr, left, right, k) {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const partitionIndex = partition(arr, left, right);

    if (k === partitionIndex) {
        return arr[partitionIndex];
    } else if (k < partitionIndex) {
        return quickselect(arr, left, partitionIndex - 1, k);
    } else {
        return quickselect(arr, partitionIndex + 1, right, k);
    }
}

function findKthSmallest(arr, k) {
    return quickselect(arr, 0, arr.length - 1, k - 1);
}

const array = [5, 8, 2, 7, 1, 6, 9];
const k = 3;
const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 3
