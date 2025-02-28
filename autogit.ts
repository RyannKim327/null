function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr; // base case: an array of zero or one element is sorted
    }

    const mid = Math.floor(arr.length / 2); // find the middle point
    const left = mergeSort(arr.slice(0, mid)); // recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // recursively sort the right half

    return merge(left, right); // merge the sorted halves
}

function merge(left: number[], right: number[]): number[] {
    let sorted: number[] = [];
    let i = 0;
    let j = 0;

    // merge the two arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }

    // if there are remaining elements in left, add them
    while (i < left.length) {
        sorted.push(left[i]);
        i++;
    }

    // if there are remaining elements in right, add them
    while (j < right.length) {
        sorted.push(right[j]);
        j++;
    }

    return sorted; // return the merged array
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);
