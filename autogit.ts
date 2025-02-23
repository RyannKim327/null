function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Collect remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSort(arr: number[]): number[] {
    let n = arr.length;
    if (n < 2) return arr;

    // Each element is considered a sorted subarray of size 1
    let sortedSubArrays: number[][] = arr.map(val => [val]);

    // Iteratively merge subarrays
    while (sortedSubArrays.length > 1) {
        let mergedArrays: number[][] = [];

        for (let i = 0; i < sortedSubArrays.length; i += 2) {
            if (i + 1 < sortedSubArrays.length) {
                mergedArrays.push(merge(sortedSubArrays[i], sortedSubArrays[i + 1]));
            } else {
                // If odd number of subarrays, just push the last one
                mergedArrays.push(sortedSubArrays[i]);
            }
        }

        sortedSubArrays = mergedArrays;
    }

    return sortedSubArrays[0];
}

// Example usage
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(arrayToSort);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
