function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // After each pass, the largest element is bubbled to the end,
        // so we can reduce the range for the next pass
        // For optimization, uncomment the next line:
        // n--;
    } while (swapped);

    return arr;
}

// Example usage:
const sampleArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(sampleArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
