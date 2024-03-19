function mergeSortIterative(arr) {
    const n = arr.length;
    const buffer = new Array(n);
    
    for (let size = 1; size < n; size *= 2) {
        for (let start = 0; start < n; start += 2 * size) {
            const leftStart = start;
            const leftEnd = Math.min(start + size, n);
            const rightStart = leftEnd;
            const rightEnd = Math.min(start + 2 * size, n);
            
            let i = leftStart;
            let j = rightStart;
            for (let k = leftStart; k < rightEnd; k++) {
                if (i < leftEnd && (j >= rightEnd || arr[i] <= arr[j])) {
                    buffer[k] = arr[i];
                    i++;
                } else {
                    buffer[k] = arr[j];
                    j++;
                }
            }
        }
        
        arr = buffer.slice();
    }
    
    return arr;
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr);
