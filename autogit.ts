// Function to get the maximum number of digits in the number array
function getMax(arr: number[]): number {
    return Math.max(...arr);
}

// Function to do counting sort based on a specific digit
function countingSort(arr: number[], exp: number): number[] {
    const n = arr.length;
    const output: number[] = new Array(n); // Output array
    const count: number[] = new Array(10).fill(0); // Count array for digits 0-9

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Change count[i] so that it now contains actual position of this digit in output array
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy the output array to arr, so that arr now contains sorted numbers
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }

    return arr;
}

// Radix Sort function
function radixSort(arr: number[]): number[] {
    const max = getMax(arr);

    // Apply counting sort to sort elements based on each digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log('Original Array:', arr);
const sortedArr = radixSort(arr);
console.log('Sorted Array:', sortedArr);
