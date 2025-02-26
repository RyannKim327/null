function countingSort(array: number[], place: number): number[] {
    const output: number[] = new Array(array.length);
    const count: number[] = new Array(10).fill(0);

    // Count occurrences of digits
    for (const num of array) {
        const digit = Math.floor(Math.abs(num) / place) % 10;
        count[digit]++;
    }

    // Change count[i] so that it contains the actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = array.length - 1; i >= 0; i--) {
        const digit = Math.floor(Math.abs(array[i]) / place) % 10;
        output[count[digit] - 1] = array[i];
        count[digit]--;
    }

    return output;
}

function radixSort(array: number[]): number[] {
    // Get the maximum number to figure out the number of digits
    const max = Math.max(...array);

    // Apply counting sort to sort elements by each digit
    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
        array = countingSort(array, place);
    }

    return array;
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr);
