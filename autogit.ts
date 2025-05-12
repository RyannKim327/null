function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortIterative(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    let step = 1;  // Initial subarray size (1 element)
    const n = arr.length;

    // Work on subarrays of size step, doubling each time
    while (step < n) {
        let mergedArray: number[] = [];
        for (let start = 0; start < n; start += 2 * step) {
            const mid = Math.min(start + step, n);
            const end = Math.min(start + 2 * step, n);

            const left = arr.slice(start, mid);
            const right = arr.slice(mid, end);

            mergedArray = mergedArray.concat(merge(left, right));
        }
        arr = mergedArray;
        step *= 2;
    }

    return arr;
}

// Example usage:
const unsorted = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(unsorted));
