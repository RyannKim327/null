function insertionSort(arr: number[]): number[] {
    // Make a copy to avoid mutating the original array
    const sortedArr = [...arr];

    for (let i = 1; i < sortedArr.length; i++) {
        let current = sortedArr[i];
        let j = i - 1;

        // Shift elements that are greater than current one position ahead
        while (j >= 0 && sortedArr[j] > current) {
            sortedArr[j + 1] = sortedArr[j];
            j--;
        }
        // Place current element at its correct position
        sortedArr[j + 1] = current;
    }

    return sortedArr;
}
const unsorted = [8, 3, 5, 1, 9];
const sorted = insertionSort(unsorted);
console.log(sorted); // [1, 3, 5, 8, 9]
