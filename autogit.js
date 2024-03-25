function countingSort(arr) {
    let max = Math.max(...arr);
    let countArray = new Array(max + 1).fill(0);
    let sortedArray = [];

    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i]]++;
    }

    for (let i = 0; i < countArray.length; i++) {
        while (countArray[i] > 0) {
            sortedArray.push(i);
            countArray[i]--;
        }
    }

    return sortedArray;
}

// Example usage
let unsortedArray = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
