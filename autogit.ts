function merge(left: number[], right: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i++]);
        } else {
            merged.push(right[j++]);
        }
    }

    // Append remaining elements
    return merged.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortIterative(arr: number[]): number[] {
    let width = 1;
    const n = arr.length;
    let result = arr.slice(); // make a copy to avoid mutating input

    while (width < n) {
        const mergedArr: number[] = [];

        for (let i = 0; i < n; i += 2 * width) {
            const left = result.slice(i, i + width);
            const right = result.slice(i + width, i + 2 * width);
            mergedArr.push(...merge(left, right));
        }

        result = mergedArr;
        width *= 2;
    }

    return result;
}

// Example usage:
const unsorted = [38, 27, 43, 3, 9, 82, 10];
const sorted = mergeSortIterative(unsorted);
console.log(sorted); // [3, 9, 10, 27, 38, 43, 82]
