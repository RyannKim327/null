function countingSort(arr: number[]): number[] {
    if (arr.length === 0) {
        return [];
    }

    // Find the min and max to handle negative numbers as well
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Adjust offset if negative numbers exist
    const offset = min < 0 ? -min : 0;

    // Initialize count array
    const count = new Array(max - min + 1).fill(0);

    // Count the occurrences
    for (const num of arr) {
        count[num + offset]++;
    }

    // Reconstruct the sorted array
    let sortedIndex = 0;
    const sorted = new Array(arr.length);
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sorted[sortedIndex++] = i - offset;
            count[i]--;
        }
    }

    return sorted;
}
const unsorted = [4, 2, -3, 6, 1, 0, -2, 4];
const sorted = countingSort(unsorted);
console.log(sorted); // Output: [-3, -2, 0, 1, 2, 4, 4, 6]
