function mergeSortIterative(arr) {
    const n = arr.length;
    const temp = new Array(n);
    
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            let mid = Math.min(leftStart + size, n);
            let rightEnd = Math.min(leftStart + 2 * size, n);
            merge(arr, leftStart, mid, rightEnd, temp);
        }
    }
    
    return arr;
}

function merge(arr, leftStart, mid, rightEnd, temp) {
    let left = leftStart;
    let right = mid;
    let index = leftStart;
    
    while (left < mid && right < rightEnd) {
        if (arr[left] <= arr[right]) {
            temp[index++] = arr[left++];
        } else {
            temp[index++] = arr[right++];
        }
    }
    
    while (left < mid) {
        temp[index++] = arr[left++];
    }
    
    while (right < rightEnd) {
        temp[index++] = arr[right++];
    }
    
    for (let i = leftStart; i < rightEnd; i++) {
        arr[i] = temp[i];
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr));
