function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let width = 1;
    const n = arr.length;
    
    // Auxiliary array to help with merging
    const aux: number[] = new Array(n);
    
    // Iterate over widths
    while (width < n) {
        for (let i = 0; i < n; i += 2 * width) {
            const left = i;
            const mid = Math.min(i + width, n);
            const right = Math.min(i + 2 * width, n);
            merge(arr, aux, left, mid, right);
        }
        // Swap references for the next iteration
        for (let i = 0; i < n; i++) {
            arr[i] = aux[i];
        }
        width *= 2; // Double the width
    }
    return arr;
}

function merge(arr: number[], aux: number[], left: number, mid: number, right: number): void {
    let i = left;   // Starting index for left subarray
    let j = mid;    // Starting index for right subarray
    let k = left;   // Starting index to be sorted

    // Merge the two halves into aux array
    while (i < mid && j < right) {
        if (arr[i] <= arr[j]) {
            aux[k++] = arr[i++];
        } else {
            aux[k++] = arr[j++];
        }
    }

    // Copy remaining elements of left subarray, if any
    while (i < mid) {
        aux[k++] = arr[i++];
    }

    // Copy remaining elements of right subarray, if any
    while (j < right) {
        aux[k++] = arr[j++];
    }
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]
