function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    // Make a copy so the original array isn't mutated
    let result = [...arr];

    for (let i = 0; i < n - 1; i++) {
        // After each pass, the largest element settles at the end, so we can reduce the inner loop range
        for (let j = 0; j < n - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                // Swap elements
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }

    return result;
}
const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(unsorted);
console.log(sorted);  // [11, 12, 22, 25, 34, 64, 90]
