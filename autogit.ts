function bubbleSort(arr: number[]): number[] {
    const n: number = arr.length;
    let swapped: boolean;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Last i elements are already in place
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set swapped to true
            }
        }

        // If no two elements were swapped by inner loop, then break
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
const numbers: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers: number[] = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
Sorted array: [11, 12, 22, 25, 34, 64, 90]
