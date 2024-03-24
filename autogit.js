function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

// Example usage:
const arr = [5, 3, 8, 2, 1, 4];
console.log("Original array:", arr);

const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
