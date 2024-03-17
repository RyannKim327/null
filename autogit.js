// Function to find the maximum number in an array
const getMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// Counting sort function for a specific digit at a given place value
const countingSort = (arr, place) => {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / place) % 10;
        count[digit]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
};

// Radix sort function
const radixSort = (arr) => {
    const max = getMax(arr);

    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
        countingSort(arr, place);
    }

    return arr;
};

// Example Usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log('Original Array:', arr);
console.log('Sorted Array:', radixSort(arr));
