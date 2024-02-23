function countingSort(arr, max) {
    const count = new Array(max + 1).fill(0);
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }

    return result;
}

// Example usage
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const maxNumber = Math.max(...unsortedArray);
const sortedArray = countingSort(unsortedArray, maxNumber);
console.log(sortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
