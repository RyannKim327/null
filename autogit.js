function mergeSort(arr) {
    const len = arr.length;
    const aux = new Array(len);
    
    for (let size = 1; size < len; size *= 2) {
        for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size, len);
            const rightStart = Math.min(leftStart + 2 * size, len);
            merge(arr, aux, leftStart, mid, rightStart);
        }
    }
    
    return arr;
}

function merge(arr, aux, leftStart, mid, rightStart) {
    let left = leftStart;
    let right = mid;
    
    for (let i = leftStart; i < rightStart; i++) {
        if (left < mid && (right >= rightStart || arr[left] <= arr[right])) {
            aux[i] = arr[left];
            left++;
        } else {
            aux[i] = arr[right];
            right++;
        }
    }
    
    for (let i = leftStart; i < rightStart; i++) {
        arr[i] = aux[i];
    }
}

// Test the merge sort function
const arr = [5, 3, 8, 6, 2, 7, 1, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
