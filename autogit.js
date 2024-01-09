function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
}
let arr = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(arr));  // Output: [1, 2, 3, 4, 5, 6]
