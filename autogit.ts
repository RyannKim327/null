function countingSort(arr: number[], place: number): number[] {
    const output: number[] = new Array(arr.length);
    const count: number[] = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(Math.abs(arr[i]) / place) % 10;
        count[digit]++;
    }

    // Change count[i] so that it contains the position of this digit in output[]
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(Math.abs(arr[i]) / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    return output;
}

function radixSort(arr: number[]): number[] {
    // Find the maximum number to figure out the number of digits
    const max = Math.max(...arr);

    // Perform counting sort for every digit
    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
        arr = countingSort(arr, place);
    }

    return arr;
}

// Example usage:
const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log("Sorted Array:", sortedArray);
