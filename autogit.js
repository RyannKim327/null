function bubbleSort(array) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    }
    return array;
}
const numbers = [5, 3, 8, 2, 1, 4];
console.log(bubbleSort(numbers)); // Output: [1, 2, 3, 4, 5, 8]
