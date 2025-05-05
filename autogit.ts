function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return [];

    // Find the max and min values to handle negative numbers as well
    let max = arr[0];
    let min = arr[0];
    for (const num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    const range = max - min + 1;
    const count = new Array(range).fill(0);

    // Count occurrences
    for (const num of arr) {
        count[num - min]++;
    }

    // Calculate cumulative counts
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    const output = new Array(arr.length);

    // Build the output array by placing elements in correct positions
    // Iterate backward to make counting sort stable
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        count[num - min]--;
        output[count[num - min]] = num;
    }

    return output;
}

// Example usage:
const sorted = countingSort([4, 2, 2, 8, 3, 3, 1]);
console.log(sorted); // Output: [1, 2, 2, 3, 3, 4, 8]
