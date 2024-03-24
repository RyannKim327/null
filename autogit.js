// Heap Sort Algorithm
function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root with last element
        maxHeapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        maxHeapify(arr, i, arr.length);
    }
}

function maxHeapify(arr, i, max) {
    let index, leftChild, rightChild;

    while (i < max) {
        index = i;
        leftChild = 2 * i + 1;
        rightChild = leftChild + 1;

        if (leftChild < max && arr[leftChild] > arr[index]) {
            index = leftChild;
        }

        if (rightChild < max && arr[rightChild] > arr[index]) {
            index = rightChild;
        }

        if (index === i) {
            return;
        }

        [arr[i], arr[index]] = [arr[index], arr[i]];
        i = index;
    }
}

// Example usage
const unsortedArray = [4, 10, 3, 5, 1];
const sortedArray = heapSort(unsortedArray);

console.log(sortedArray); // Output: [1, 3, 4, 5, 10]
