// Function to perform counting sort based on the digit represented by exp (10^i)
function countingSort(arr: number[], exp: number): number[] {
    const n = arr.length;
    const output: number[] = new Array(n); // Output array
    const count: number[] = new Array(10).fill(0); // Count array

    // Count occurrences of digits
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10; // Extract the digit
        count[index]++;
    }

    // Update the count array such that count[i] contains
    // the actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    return output;
}

// Function to perform radix sort
function radixSort(arr: number[]): number[] {
    // Find the maximum number to know the number of digits
    const max = Math.max(...arr);

    // Do counting sort for every digit (exp represents the current digit's place value)
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        arr = countingSort(arr, exp);
    }

    return arr;
}

// Example usage
const numbers: number[] = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
