function insertionSort(arr: number[]): number[] {
    // Make a copy to avoid mutating the original array if you want
    let sortedArr = arr.slice();

    for (let i = 1; i < sortedArr.length; i++) {
        const current = sortedArr[i];
        let j = i - 1;

        // Shift elements of the sorted segment that are greater than current to the right
        while (j >= 0 && sortedArr[j] > current) {
            sortedArr[j + 1] = sortedArr[j];
            j--;
        }

        // Insert the current element into the correct position
        sortedArr[j + 1] = current;
    }

    return sortedArr;
}
const unsorted = [5, 2, 9, 1, 5, 6];
const sorted = insertionSort(unsorted);
console.log(sorted); // Output: [1, 2, 5, 5, 6, 9]
