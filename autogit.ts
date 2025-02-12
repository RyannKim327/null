function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;

    do {
        swapped = false; // Initially set swapped to false
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // If they are in the wrong order, swap them
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // A swap occurred
            }
        }
        n--; // Reduce the range of comparison, as the last element is already sorted
    } while (swapped); // Repeat until no more swaps occur

    return arr; // Return the sorted array
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", numbers);
const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
