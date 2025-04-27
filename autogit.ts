function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // Outer loop to ensure we go through the whole array
    do {
        swapped = false; // Reset the swapped flag each time
        // Inner loop for comparing adjacent elements
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap if the elements are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // Set flag to true to indicate a swap occurred
            }
        }
    } while (swapped); // Repeat until no swaps occur

    return arr; // Return the sorted array
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log("Sorted Array:", sortedNumbers);
