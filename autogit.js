function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const n = arr.length;
    const sorted = arr.slice();
    const buffer = new Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
            const leftEnd = Math.min(leftStart + size, n);
            const rightStart = leftEnd;
            const rightEnd = Math.min(rightStart + size, n);

            let i = leftStart;
            let j = rightStart;
            let k = leftStart;

            while (i < leftEnd && j < rightEnd) {
                if (sorted[i] <= sorted[j]) {
                    buffer[k++] = sorted[i++];
                } else {
                    buffer[k++] = sorted[j++];
                }
            }

            while (i < leftEnd) {
                buffer[k++] = sorted[i++];
            }

            while (j < rightEnd) {
                buffer[k++] = sorted[j++];
            }
        }

        const temp = sorted;
        sorted = buffer;
        buffer = temp;
    }

    return sorted;
}

// Usage
const arr = [5, 3, 8, 6, 2, 7, 1, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
