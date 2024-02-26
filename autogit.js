function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage
const unsortedArray = [5, 2, 4, 6, 1, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
