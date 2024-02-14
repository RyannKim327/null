function countingSort(array) {
    const maxValue = Math.max(...array);
    const countArray = Array(maxValue + 1).fill(0);

    for (let i = 0; i < array.length; i++) {
        countArray[array[i]]++;
    }

    for (let i = 1; i <= maxValue; i++) {
        countArray[i] += countArray[i - 1];
    }

    const sortedArray = Array(array.length);

    for (let i = array.length - 1; i >= 0; i--) {
        const value = array[i];
        const count = countArray[value];
        sortedArray[count - 1] = value;
        countArray[value]--;
    }

    return sortedArray;
}
const unsortedArray = [9, 3, 1, 5, 2];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 9]
