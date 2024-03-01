function mergeSortIterative(arr) {
    const n = arr.length;
    const tempArr = new Array(n);
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
            const middle = Math.min(leftStart + size, n);
            const rightStart = Math.min(leftStart + 2*size, n);
            merge(arr, leftStart, middle, rightStart, tempArr);
        }
    }
    return arr;
}

function merge(arr, leftStart, middle, rightStart, tempArr) {
    let leftIdx = leftStart;
    let rightIdx = middle;
    
    for (let i = leftStart; i < rightStart; i++) {
        if (leftIdx < middle && (rightIdx >= rightStart || arr[leftIdx] <= arr[rightIdx])) {
            tempArr[i] = arr[leftIdx];
            leftIdx++;
        } else {
            tempArr[i] = arr[rightIdx];
            rightIdx++;
        }
    }
    
    for (let i = leftStart; i < rightStart; i++) {
        arr[i] = tempArr[i];
    }
}

// Test the mergeSortIterative function
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array: ", arr);
console.log("Sorted array: ", mergeSortIterative(arr));
