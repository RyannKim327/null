function countingSort(arr) {
    const max = Math.max(...arr);
    const countArray = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i]]++;
    }

    let sortedIndex = 0;
    for (let i = 0; i < countArray.length; i++) {
        while (countArray[i] > 0) {
            arr[sortedIndex++] = i;
            countArray[i]--;
        }
    }

    return arr;
}

// Example usage
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);
