function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

// Example Usage
const arr = [12, 11, 13, 5, 6];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // Output: [5, 6, 11, 12, 13]
