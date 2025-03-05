function bubbleSort(arr: number[]): number[] {
    const n: number = arr.length;
    let swapped: boolean;

    // Loop through the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Last i elements are already sorted
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, then break
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
const unsortedArray: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
