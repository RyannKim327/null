function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // Outer loop to traverse through all elements
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop for comparisons
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if the current element is greater than the next element
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // ES6 destructuring assignment
                swapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, then break
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
const exampleArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(exampleArray));
