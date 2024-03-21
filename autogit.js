function shellSort(arr) {
    let len = arr.length;
    let gap = Math.floor(len / 2);

    while (gap > 0) {
        for (let i = gap; i < len; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage
const unsortedArray = [8, 3, 11, 6, 2, 1, 0, 9];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [0, 1, 2, 3, 6, 8, 9, 11]
