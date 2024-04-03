function countingSort(arr, max) {
    const countArr = new Array(max + 1).fill(0);
    const sortedArr = [];

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]]++;
    }

    // Build the sorted array using the count array
    for (let i = 0; i < countArr.length; i++) {
        while (countArr[i] > 0) {
            sortedArr.push(i);
            countArr[i]--;
        }
    }

    return sortedArr;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr);
const sortedArr = countingSort(arr, max);

console.log(sortedArr);
