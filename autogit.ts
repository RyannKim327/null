function countingSort(arr: number[], exp: number): number[] {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0); // Base 10 for single-digit numbers

    // Count occurrences of digits
    for (let i = 0; i < n; i++) {
        const digit = Math.floor((arr[i] / exp) % 10);
        count[digit]++;
    }

    // Change count[i] so that it contains the position of this digit in the output array
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor((arr[i] / exp) % 10);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    return output;
}

function radixSort(arr: number[]): number[] {
    // Find the maximum number to know the number of digits
    const max = Math.max(...arr);

    // Apply counting sort to sort elements based on each digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        arr = countingSort(arr, exp);
    }

    return arr;
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
