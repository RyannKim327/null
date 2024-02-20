function heapSort(arr) {
    buildMaxHeap(arr);

    let endIndex = arr.length - 1;
    while (endIndex > 0) {
        // Swap root with last element
        [arr[0], arr[endIndex]] = [arr[endIndex], arr[0]]; 
        endIndex--;
        
        heapifyDown(arr, 0, endIndex);
    }

    return arr;
}

function buildMaxHeap(arr) {
    let startIndex = Math.floor(arr.length / 2) - 1;
    for (let i = startIndex; i >= 0; i--) {
        heapifyDown(arr, i, arr.length - 1);
    }
}

function heapifyDown(arr, startIndex, endIndex) {
    let rootIndex = startIndex;
    while (true) {
        let childIndex = 2 * rootIndex + 1;
        if (childIndex > endIndex) break;

        if (childIndex + 1 <= endIndex && arr[childIndex] < arr[childIndex + 1]) {
            childIndex++;
        }

        if (arr[rootIndex] < arr[childIndex]) {
            [arr[rootIndex], arr[childIndex]] = [arr[childIndex], arr[rootIndex]];
            rootIndex = childIndex;
        } else {
            break;
        }
    }
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr));  // Output: [5, 6, 7, 11, 12, 13]
