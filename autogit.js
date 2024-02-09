function shellSort(arr) {
    const n = arr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
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

// Example usage:
const array = [9, 5, 1, 3, 8, 4, 2, 7, 6];
const sortedArray = shellSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
