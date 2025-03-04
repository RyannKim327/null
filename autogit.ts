function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr; // Base case: an array of zero or one element is already sorted
    }

    // Split the array in half
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves and then merge them
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    let sortedArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays together in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenating leftover elements (if any)
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
[3, 9, 10, 27, 38, 43, 82]
