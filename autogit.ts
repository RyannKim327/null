function getMax(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countingSort(arr: number[], exp: number): void {
    const n = arr.length;
    const output: number[] = new Array(n);
    const count: number[] = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Update count[i] to contain the actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy the output array to arr[], so that arr[] contains sorted numbers according to the current digit
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr: number[]): number[] {
    const max = getMax(arr);

    // Apply counting sort to sort the elements based on place value (exp)
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Unsorted array:", arr);
console.log("Sorted array:", radixSort(arr));
