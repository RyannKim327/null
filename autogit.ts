function countingSortForRadix(array: number[], place: number): number[] {
    const output = new Array(array.length); // Output array
    const count = new Array(10).fill(0); // Count array for decimal digits (0-9)

    // Count occurrences of each digit in the given place
    for (let i = 0; i < array.length; i++) {
        const digit = Math.floor(array[i] / place) % 10;
        count[digit]++;
    }

    // Change count[i] so that it contains the actual position of this digit in output[]
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array using the count array
    for (let i = array.length - 1; i >= 0; i--) {
        const digit = Math.floor(array[i] / place) % 10;
        output[count[digit] - 1] = array[i];
        count[digit]--;
    }

    return output;
}

function radixSort(array: number[]): number[] {
    // Find the maximum number to know the number of digits
    const max = Math.max(...array);

    // Perform counting sort for each digit
    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
        array = countingSortForRadix(array, place);
    }

    return array;
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log("Sorted array:", sortedArr);
