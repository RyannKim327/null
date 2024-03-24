function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;

    const countArr = new Array(range).fill(0);
    const outputArr = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i] - min]++;
    }

    for (let i = 1; i < range; i++) {
        countArr[i] += countArr[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        outputArr[countArr[arr[i] - min] - 1] = arr[i];
        countArr[arr[i] - min]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = outputArr[i];
    }

    return arr;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original array: " + arr);
console.log("Sorted array: " + countingSort(arr));
