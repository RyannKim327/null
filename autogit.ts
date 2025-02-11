function getMax(arr: number[]): number {
    return arr.reduce((max, val) => (val > max ? val : max), arr[0]);
}

function countingSort(arr: number[], exp: number): number[] {
    const output: number[] = new Array(arr.length); // output array
    const count: number[] = new Array(10).fill(0); // count array

    // Store count of occurrences in count[]
    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Change count[i] so that it contains actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy the output array to arr[], so that arr[] now contains sorted numbers
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }

    return arr;
}

function radixSort(arr: number[]): number[] {
    const max = getMax(arr);

    // Apply counting sort to sort elements based on place value
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

// Example Usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original Array:", arr);
console.log("Sorted Array:", radixSort(arr));
