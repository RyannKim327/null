function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const n = arr.length;
    const sortedArr = Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let start = 0; start < n; start += 2 * size) {
            const start1 = start;
            const end1 = Math.min(start + size, n);
            const start2 = end1;
            const end2 = Math.min(start + 2 * size, n);

            let i = start1;
            let j = start2;
            
            for (let k = start; k < end2; k++) {
                if (i < end1 && (j >= end2 || arr[i] <= arr[j])) {
                    sortedArr[k] = arr[i];
                    i++;
                } else {
                    sortedArr[k] = arr[j];
                    j++;
                }
            }
        }
        
        arr = sortedArr.slice(0, n);
    }

    return arr;
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
