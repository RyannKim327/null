function merge(arr: number[], left: number, mid: number, right: number): void {
    const leftSub = arr.slice(left, mid + 1);
    const rightSub = arr.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;

    while (i < leftSub.length && j < rightSub.length) {
        if (leftSub[i] <= rightSub[j]) {
            arr[k++] = leftSub[i++];
        } else {
            arr[k++] = rightSub[j++];
        }
    }

    // Copy remaining elements
    while (i < leftSub.length) {
        arr[k++] = leftSub[i++];
    }
    while (j < rightSub.length) {
        arr[k++] = rightSub[j++];
    }
}

function iterativeMergeSort(arr: number[]): number[] {
    const n = arr.length;

    // Start with sublists of size 1
    for (let width = 1; width < n; width *= 2) {
        // Traverse subsequences in pairs
        for (let i = 0; i < n; i += 2 * width) {
            const left = i;
            const mid = Math.min(i + width - 1, n - 1);
            const right = Math.min(i + 2 * width - 1, n - 1);
            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }

    return arr;
}
const array = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(iterativeMergeSort(array)); // [1, 2, 3, 4, 5, 6, 7, 8]
